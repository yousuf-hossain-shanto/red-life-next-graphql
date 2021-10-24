import { extendType, objectType } from "nexus";

export const BloodGroup = objectType({
    name: "BloodGroup",
    definition(t) {
        t.id('id')
        t.string('name')
    }
})

export const BloodGroupQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.field('bloodGroups', {
            type: 'BloodGroup',
            resolve: (_parent, _args, ctx) => {
                return ctx.prisma.bloodGroup.findMany()
            }
        })
    }
})