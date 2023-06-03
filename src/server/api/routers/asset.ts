import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const assetRouter = createTRPCRouter({
  getAllStocks: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.stocks.findMany({
      where: {
        stocksId: ctx.session.user.id,
      },
    });
  }),

  addStock: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        ticker: z.string(),
        quantity: z.number(),
        average_price: z.number(),
        current_price: z.number(),
        marketcap: z.string(),
        sector: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.stocks.create({
        data: {
          name: input.name,
          ticker: input.ticker,
          quantity: input.quantity,
          average_price: input.average_price,
          current_price: input.current_price,
          marketcap: input.marketcap,
          sector: input.sector,
          stocksId: ctx.session.user.id,
        },
      });
    }),

  updateStock: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        ticker: z.string(),
        quantity: z.number(),
        average_price: z.number(),
        current_price: z.number(),
        marketcap: z.string(),
        sector: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.stocks.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          ticker: input.ticker,
          quantity: input.quantity,
          average_price: input.average_price,
          current_price: input.current_price,
          marketcap: input.marketcap,
          sector: input.sector,
          stocksId: ctx.session.user.id,
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
      return ctx.prisma.stocks.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
