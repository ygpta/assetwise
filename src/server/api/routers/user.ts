import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getUserDetails: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
      include: {
        asset: {
          include: {
            stock: true,
            mutalfunds: true,
            gold: true,
            cash:true
          },
        },
      },
    });
  }),
});
