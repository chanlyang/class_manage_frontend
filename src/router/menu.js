const TodayEpidemic = () => import('@/views/pages/todayEpidemic/index.vue')
const DayWirte = () => import('@/views/pages/dayWirte/index.vue')
const PastNotice = () => import('@/views/pages/pastNotice/index.vue')
const StudyCheat = () => import('@/views/pages/studyCheat/index.vue')
const Vacate = () => import('@/views/pages/vacate/index.vue')
const My = () => import('@/views/pages/my/index.vue')
const EditInfo = () => import('@/views/pages/editInfo/index.vue')
const CheatList = () => import('@/views/pages/cheatList/index.vue')
const menuTabs = [
  {

    label: '今日疫情',
    url: "/todayEpidemic",
    name: "TodayEpidemic",
    component: TodayEpidemic,
    query: {},
  },
  {
    label: '每日填报',
    name: "DayWirte",
    url: "/dayWirte",
    component: DayWirte,
    query: {},
  },
  {
    label: '往期通知',
    name: "PastNotice",
    url: "/pastNotice",
    component: PastNotice,
    query: {},
  }, {
    label: '学习反诈',
    name: "StudyCheat",
    url: "/studyCheat",
    component: StudyCheat,
    query: {},
  }, {
    label: '往期反诈',
    name: "CheatList",
    url: "/cheatList",
    component: CheatList,
    query: {},
  },
  {
    label: '请假',
    name: "Vacate",
    url: "/vacate",
    component: Vacate,
    query: {},
  }, {
    label: '我的请假',
    name: "My",
    url: "/my",
    component: My,
    query: {},
  }, {
    label: '修改信息',
    name: "EditInfo",
    url: "/editInfo",
    component: EditInfo,
    query: {},
  }
]

export default menuTabs