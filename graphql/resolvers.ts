export const resolvers = {
    Query: {
        bloodGroups: (_parent, _args, ctx) => {
            return ctx.prisma.bloodGroup.findMany()
        }
    }
}