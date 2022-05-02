const TodayEpidemic = () => import('@/views/pages/todayEpidemic/index.vue')
const DayWirte = () => import('@/views/pages/dayWirte/index.vue')
const PastNotice = () => import('@/views/pages/pastNotice/index.vue')
const StudyCheat = () => import('@/views/pages/studyCheat/index.vue')
const Vacate = () => import('@/views/pages/vacate/index.vue')
const My = () => import('@/views/pages/my/index.vue')
const EditInfo = () => import('@/views/pages/editInfo/index.vue')
const ReleasEpidSummar = () => import('@/views/systems/ReleasEpidSummar/index.vue')
const StudentFillList = () => import('@/views/systems/studentFillList/index.vue')
const StudentVoMana = () => import('@/views/systems/studentVoMana/index.vue')
const PublishNotice = () => import('@/views/systems/publishNotice/index.vue')
const NoticeList = () => import('@/views/systems/noticeList/index.vue')
const PulishCheatMana = () => import('@/views/systems/pulishCheatMana/index.vue')
const CheatList = () => import('@/views/systems/cheatList/index.vue')
const StudentList = () => import('@/views/systems/studentList/index.vue')

export default {
  TodayEpidemic, DayWirte, PastNotice, StudyCheat, Vacate, My, EditInfo, ReleasEpidSummar,
  StudentFillList, PublishNotice, StudentVoMana, NoticeList, PulishCheatMana, CheatList,
  StudentList
}
