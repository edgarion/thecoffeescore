import { runCatalogValidator } from './validate-catalog.js';

console.log('⏰ [CRON RUNNER] Iniciando servicio del Validador Diario de The Coffee Score...');
console.log('⏰ Programado para ejecutarse cada día a las 09:00 AM');

// Calculate milliseconds until next 9:00 AM
function getMsUntilNext9AM(): number {
  const now = new Date();
  const next9AM = new Date();
  next9AM.setHours(9, 0, 0, 0);

  if (now.getTime() >= next9AM.getTime()) {
    // If it's already past 9 AM today, schedule for 9 AM tomorrow
    next9AM.setDate(next9AM.getDate() + 1);
  }

  return next9AM.getTime() - now.getTime();
}

async function executeDailyValidation() {
  console.log(`\n🔔 [${new Date().toISOString()}] Ejecutando validación programada de las 09:00 AM...`);
  try {
    const summary = await runCatalogValidator();
    if (summary.status === 'PASSED') {
      console.log(`✅ [CRON 09:00 AM] Validación completada con éxito. Todos los datos e imágenes son correctos.`);
    } else {
      console.error(`🚨 [CRON 09:00 AM] Se detectaron ${summary.totalErrors} errores en el catálogo.`);
    }
  } catch (error) {
    console.error('❌ [CRON 09:00 AM] Error durante la ejecución del validador:', error);
  }

  // Schedule next run in 24 hours
  const nextDelay = getMsUntilNext9AM();
  const nextRunDate = new Date(Date.now() + nextDelay);
  console.log(`⏳ Próxima validación programada para: ${nextRunDate.toLocaleString()}`);
  setTimeout(executeDailyValidation, nextDelay);
}

// 1. Run an immediate validation upon startup to confirm health
console.log('🚀 Ejecutando verificación inicial de arranque...');
runCatalogValidator()
  .then(() => {
    const delay = getMsUntilNext9AM();
    const nextRun = new Date(Date.now() + delay);
    console.log(`\n⏳ Servicio activo en segundo plano.`);
    console.log(`📅 Próxima ejecución diaria programada para: ${nextRun.toLocaleString()}`);
    setTimeout(executeDailyValidation, delay);
  })
  .catch((err) => {
    console.error('Error en arranque del cron runner:', err);
  });
