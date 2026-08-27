import 'dotenv/config';
import { UserRepository } from '../src/services/db/userRepository';
import { CartRepository } from '../src/services/db/cartRepository';

async function test() {
  console.log('🧪 Probando Registro de Usuario, Login y Cesta de Compra con Turso...');

  const testEmail = `test_barista_${Date.now()}@thecoffeescore.com`;
  const testPassword = 'SecurePassword123!';
  const testName = 'Barista Tester';

  // 1. Registro de usuario
  console.log(`\n1. Registrando nuevo usuario: ${testEmail}...`);
  const user = await UserRepository.createUser(testEmail, testPassword, testName);
  console.log('✅ Usuario creado en Turso con ID:', user.id, user.name);

  // 2. Login de usuario
  console.log('\n2. Probando inicio de sesión (verificación criptográfica de contraseña)...');
  const loggedInUser = await UserRepository.authenticateUser(testEmail, testPassword);
  console.log('✅ Login exitoso para:', loggedInUser.email);

  // 3. Añadir productos a la cesta
  console.log('\n3. Añadiendo productos a la cesta en Turso...');
  const item1 = await CartRepository.addItem(user.id, {
    productId: 'sage-bambino-plus',
    productName: 'Sage Bambino Plus',
    productImage: 'https://m.media-amazon.com/images/I/71r-uHk2gTL._AC_SL1500_.jpg',
    selectedStore: 'Amazon',
    storeUrl: 'https://amazon.es/s?k=Sage+Bambino+Plus',
    unitPrice: 449,
    quantity: 1,
  });
  console.log('✅ Producto 1 añadido:', item1.productName, item1.unitPrice, '€');

  const item2 = await CartRepository.addItem(user.id, {
    productId: 'nomad-karimiuki',
    productName: 'Nomad Coffee - Karimiuki',
    productImage: 'https://nomadcoffee.es/image.jpg',
    selectedStore: 'Nomad Coffee',
    storeUrl: 'https://nomadcoffee.es/products/karimiuki',
    unitPrice: 16.5,
    quantity: 2,
  });
  console.log('✅ Producto 2 añadido (x2):', item2.productName, item2.unitPrice * 2, '€');

  // 4. Consultar cesta completa
  console.log('\n4. Consultando cesta de compra del usuario desde Turso...');
  const cartItems = await CartRepository.getCartForUser(user.id);
  const total = cartItems.reduce((acc, it) => acc + it.unitPrice * it.quantity, 0);
  console.log(`✅ ${cartItems.length} tipos de producto en la cesta. Total calculado: ${total.toFixed(2)} €`);

  console.log('\n🎉 Todas las pruebas de Autenticación y Cesta de Compra pasaron al 100%!');
}

test().catch(err => {
  console.error('❌ Error en las pruebas:', err);
  process.exit(1);
});
