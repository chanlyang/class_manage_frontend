const menuTabs = [
  {

    label: '今日疫情汇总',
    url: "/todayEpidemic",
    name: "TodayEpidemic",
    component: 'TodayEpidemic',
    query: {},
  },
  {
    label: '发布疫情汇总',
    name: "ReleasEpidSummar",
    url: "/ReleasEpidSummar",
    component: "ReleasEpidSummar",
    query: {},
  },
  {
    label: '学生填报',
    name: "StudentFillList",
    url: "/studentFillList",
    component: "StudentFillList",
    query: {},
  }, {
    label: '学生请假',
    name: "StudentVoMana",
    url: "/StudentVoMana",
    component: "StudentVoMana",
    query: {},
  }, {
    label: '发布通告',
    name: "PublishNotice",
    url: "/PublishNotice",
    component: "PublishNotice",
    query: {},
  }, {
    label: '通告列表',
    name: "NoticeList",
    url: "/NoticeList",
    component: "NoticeList",
    query: {},
  }, {
    label: '发布反诈',
    name: "PulishCheatMana",
    url: "/pulishCheatMana",
    component: "PulishCheatMana",
    query: {},
  }, {
    label: '反诈列表',
    name: "CheatList",
    url: "/CheatList",
    component: "CheatList",
    query: {},
  }, {
    label: '学生列表',
    name: "StudentList",
    url: "/StudentList",
    component: "StudentList",
    query: {},
  }
]

export default menuTabs