import * as Name from 'w3name';
import fs from 'fs';

async function generateKey() {
  const name = await Name.create();
  
  console.log('✅ IPNS Name:', name.toString());
  console.log('   Use this in your ENS contenthash!\n');
  
  // Save the private key
  fs.writeFileSync('signing-key.txt', name.key.raw);
  console.log('✅ Private key saved to: signing-key.txt');
  console.log('   Keep this safe - you need it to update your IPNS record!\n');
  
  // Generate base64 for GitHub secrets
  const base64Key = Buffer.from(name.key.raw).toString('base64');
  console.log('✅ Base64 for GitHub Secret (W3NAME_KEY_B64):');
  console.log('   ' + base64Key + '\n');
}

generateKey();