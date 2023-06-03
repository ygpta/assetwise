import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const mutualFundRouter = createTRPCRouter({
  getAllMutualFund: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.mutalFunds.findMany({
      where: {
        mutalFundsId: ctx.session.user.id,
      },
    });
  }),
  addMutualFund: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        ticker: z.string(),
        quantity: z.number(),
        average_price: z.number(),
        current_price: z.number(),
        marketcap: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.mutalFunds.create({
        data: {
          name: input.name,
          ticker: input.ticker,
          quantity: input.quantity,
          average_price: input.average_price,
          current_price: input.current_price,
          marketcap: input.marketcap,
          mutalFundsId: ctx.session.user.id,
        },
      });
    }),

  deleteStock: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.mutalFunds.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
