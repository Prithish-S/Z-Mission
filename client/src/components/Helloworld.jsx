import{useApiUtils} from "../utils/useApiUtils";

export const Helloworld = () => {
  const content=useApiUtils();

  return (
    <div>
      <h1 className="text-3xl text-center">{content && content.message}</h1>
    </div>
  );
};
