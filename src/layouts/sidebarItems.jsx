// import {
//     AreaChartOutlined,
//     BranchesOutlined,
//     CloseCircleOutlined,
//     ContainerOutlined,
//     ControlOutlined,
//     CalendarOutlined,
//     WarningOutlined,
//     ShoppingCartOutlined,
//     ScheduleOutlined,
//     UserOutlined,
//     PicLeftOutlined,
//   } from "@ant-design/icons";
//   import { Link } from "react-router-dom";
  
//   export const sidebarItems = [
//     {
//       key: "1",
//       title: "Quản lý sản phẩm",
//       icon: <ContainerOutlined />,
//       children: [
//         {
//           key: "/manage/category",
//           title: <Link to="/manage/category">Quản lý danh mục</Link>,
//           icon: <PicLeftOutlined />,
//         },
//         {
//           key: "/manage/product",
//           title: <Link to="/manage/product">Quản lý sản phẩm</Link>,
//           icon: <ContainerOutlined />,
//         },
//         {
//           key: "/manage/product-error",
//           title: <Link to="/manage/product-error">Quản lý sản phẩm lỗi</Link>,
//           icon: <CloseCircleOutlined />,
//         },
//         {
//           key: "/manage/error-code",
//           title: <Link to="/manage/error-code">Quản lý mã lỗi</Link>,
//           icon: <WarningOutlined />,
//         },
//         {
//           key: "/manage/cc-code",
//           title: <Link to="/manage/cc-code">Quản lý mã CC</Link>,
//           icon: <ContainerOutlined />,
//         },
//       ],
//     },
//     {
//       key: "2",
//       title: "Quản lý sản xuất",
//       icon: <ControlOutlined />,
//       children: [
//         {
//           key: "/manage/department",
//           title: <Link to="/manage/department">Quản lý tổ</Link>,
//           icon: <BranchesOutlined />,
//         },
//         {
//           key: "/manage/work",
//           title: <Link to="/manage/work">Quản lý ca làm việc</Link>,
//           icon: <BranchesOutlined />,
//         },
//         {
//           key: "/manage/stage",
//           title: <Link to="/manage/stage">Quản lý công đoạn</Link>,
//           icon: <BranchesOutlined />,
//         },
//       ],
//     },
//     {
//       key: "/manage/task",
//       title: "Quản lý công việc",
//       icon: <ScheduleOutlined />,
//       children: [
//         {
//           key: "/manage/task/qa",
//           title: <Link to="/manage/task/qa">Quản lý QA/QC</Link>,
//           icon: <CalendarOutlined />,
//         },
//         {
//           key: "/manage/task/task-product",
//           title: <Link to="/manage/task/task-product">Quản lý sản xuất</Link>,
//           icon: <AreaChartOutlined />,
//         },
//       ],
//     },
//     {
//       key: "3",
//       title: <Link to="/manage/orders">Quản lý đơn hàng</Link>,
//       icon: <ShoppingCartOutlined />,
//     },
//     {
//       key: "4",
//       title: <Link to="/manage/user-manager">Quản lý tài khoản</Link>,
//       icon: <UserOutlined />,
//     },
//   ];
  