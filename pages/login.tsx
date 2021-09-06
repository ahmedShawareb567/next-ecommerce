import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any): void => {
    console.log(data);
    router.push("/");
  };

  return (
    <>
      <div className="container mb-xxl">
        <div className="text-center">
          <h2 className="fs-xl mb-xl mt-xl">Login</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group mb-sm">
                    <input
                      type="text"
                      placeholder="Email or Username.."
                      className="form-control mb-1"
                      {...register("email", { required: true })}
                    />
                    <div className="error">
                      <div className="error-content">
                        <span>
                          {errors.email?.type === "required" &&
                            "Email is required"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mb-sm">
                    <input
                      type="password"
                      placeholder="Password.."
                      className="form-control mb-1"
                      {...register("password", { required: true })}
                    />
                    <div className="error">
                      <div className="error-content">
                        <span>
                          {errors.password?.type === "required" &&
                            "Password is required"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary py-3">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
