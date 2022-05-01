const TodayEpidemic = () => import('@/views/pages/todayEpidemic/index.vue')
const DayWirte = () => import('@/views/pages/dayWirte/index.vue')
const PastNotice = () => import('@/views/pages/pastNotice/index.vue')
const StudyCheat = () => import('@/views/pages/studyCheat/index.vue')
const Vacate = () => import('@/views/pages/vacate/index.vue')
const My = () => import('@/views/pages/my/index.vue')
const menuTabs = [
  {

    label: '今日疫情',
    name: "TodayEpidemic",
    component: TodayEpidemic,
    query: {},
  },
  {
    label: '每日填报',
    name: "DayWirte",
    component: DayWirte,
    query: {},
  },
  {
    label: '往期通知',
    name: "PastNotice",
    component: PastNotice,
    query: {},
  }, {
    label: '学习反诈',
    name: "StudyCheat",
    component: StudyCheat,
    query: {},
  }, {
    label: '请假',
    name: "Vacate",
    component: Vacate,
    query: {},
  }, {
    label: '我的',
    name: "My",
    component: My,
    query: {},
  }
]

export default menuTabs