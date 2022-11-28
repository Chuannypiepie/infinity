import { createRouter, createWebHistory } from "vue-router";

import mxgl from "@/components/mxgl"; //萌新攻略
import character from "@/components/character"; //角色
import InstrumentOfTheHeart from "@/components/Instrument-of-the-Heart"; // 心之器
import magicStone from "@/components/magic-stone"; //魔石
import matchingTeam from "@/components/matching-team"; //推荐配队
import strategy from "@/components/strategy"; //大佬攻略
import buff from "@/components/buff"; //状态整合
import home from '@/view/home'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            alias: "/home",
            children: [
                {
                    path: "mxgl",
                    name: "萌新攻略",
                    components: {
                        content: () => mxgl
                    },
                },
                {
                    path: "character",
                    name: "角色",
                    components: {
                        content: () => character
                    },
                },
                {
                    path: "InstrumentOfTheHeart",
                    name: "心之器",
                    components: {
                        content: () => InstrumentOfTheHeart
                    },
                },
                {
                    path: "magicStone",
                    name: "魔石",
                    component:{
                        content: () => magicStone
                    },
                },
                {
                    path: "matchingTeam",
                    name: "推荐配队",
                    component:{
                        content: () => matchingTeam
                    },
                },
                {
                    path: "strategy",
                    name: "大佬攻略",
                    component:{
                        content: () => strategy
                    },
                },
                {
                    path: "buff",
                    name: "状态整合",
                    component:{
                        content: () => buff
                    },
                },
                {
                    //404页面
                    path: "404",
                    name: "NotFound",
                    component:{
                        content: () => import('@/components/NotFound')
                    },
                },
            ]
        },

    ],
});

export default router;
