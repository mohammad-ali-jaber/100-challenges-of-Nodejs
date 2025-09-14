const users = await prisma.user.findMany({
  where: { email: { endsWith: "@example.com" } }
});
console.log(users);