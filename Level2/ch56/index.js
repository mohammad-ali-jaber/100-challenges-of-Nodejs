async () => {
  try {
    const updated = await prisma.user.update({
      where: { id: 1 },
      data: { verified: true }
    });
    console.log('Updated:', updated);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await prisma.$disconnect();
  }
};