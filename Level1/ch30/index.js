const args = process.argv.slice(2);
 if (args[0] === '--upper' && args[1]){ 
  console.log(args[1].toUpperCase()); 
} 
 else { 
  console.log('Usage: --upper "text"'); 
}