import { Outlet } from "react-router-dom";

function TasksPageLayout() {
  return (
    <div className="container mx-auto">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export { TasksPageLayout };
