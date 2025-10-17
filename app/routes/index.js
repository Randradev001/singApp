// project imports
import Dashboard from "./dashboard/default";

// export meta
export const meta = () => ([
  { title: 'Dashboard | Berry - React Material Admin Dashboard Template' },
  {
    name: 'description',
    content:
      'Start your next React project with Berry admin template. It build with Reactjs, Material-UI, Redux, and Hook for faster web development.'
  }
]);
// ==============================|| DAFAULT PAGE ||============================== //

export default function Index() {
  return (
    <>
      <Dashboard />

    </>
  );
}
