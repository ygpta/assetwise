import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const assetRouter = createTRPCRouter({
  getAllStocks: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
          include: {
            stocks: true,
            mutalfunds: true,
            gold: true,
            cash:true
      },
    });
  }),
});




