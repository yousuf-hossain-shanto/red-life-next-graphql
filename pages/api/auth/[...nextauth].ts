import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// we will define `options` up next
const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, {
    providers: [
        Providers.Facebook({
            clientId: process.env.FB_APP_ID,
            clientSecret: process.env.FB_APP_SECRET
        })
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
    secret: process.env.SECRET,
});
export default authHandler;