export const ITEM_PER_PAGE = 6;
export const routeAccessMap  = {
    "/Admin(.*)": ["Admin"],
    "/Student(.*)": ["Student"],
    "/Teacher(.*)": ["Teacher"],
    "/Parent(.*)": ["Parent"],
    "/List/Teachers": ["Admin", "Teacher"],
    "/List/Students": ["Admin", "Teacher"],
    "/List/Parents": ["Admin", "Teacher"],
    "/List/Subjects": ["Admin"],
    "/List/Classes": ["Admin", "Teacher"],
    "/List/Exams": ["Admin", "Teacher", "Student", "Parent"],
    "/List/Assignments": ["Admin", "Teacher", "Student", "Parent"],
    "/List/Results": ["Admin", "Teacher", "Student", "Parent"],
    "/List/Attendance": ["Admin", "Teacher", "Student", "Parent"],
    "/List/Events": ["Admin", "Teacher", "Student", "Parent"],
    "/List/Announcements": ["Admin", "Teacher", "Student", "Parent"],
  };