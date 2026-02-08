import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="min-h-screen bg-slate-500 px-4 py-6 overflow-x-hidden">
      <div className="max-w-[500px] w-full mx-auto space-y-4">
        <div className="flex items-center justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 text-slate-100 text-xl"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>

          <h1 className="text-2xl sm:text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md break-words">
          <h2 className="text-lg sm:text-xl font-bold text-slate-500">
            {title}
          </h2>

          <p className="text-slate-800 mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
