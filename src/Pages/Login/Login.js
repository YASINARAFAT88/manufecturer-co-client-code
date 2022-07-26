import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { dashboardId } = useParams();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [token] = useToken(user || gUser);

      useEffect(()=>{
        if(token){
            navigate(from, {replace: true})
        }
      },[token])

      let signInError;
      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || '/'
      if(loading || gLoading){
          return <Loading />
      }
      if(error || gError){
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
      }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
        navigate('/dashboard/:dashboardId')
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                 <h2 className="text-center text-2xl font-bold">Login</h2>

    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input 
  type="email" 
  placeholder="Type here Email" 
  class="input input-bordered w-full max-w-xs" 
  {...register("email",  {
      required: {
        value: true,
        message: 'Email is required'
      },
    pattern: {
      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
      message: 'Please provide a valid Email'
    }
  })}
  />
  <label class="label">
  {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  </label>
</div>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Password</span>
  </label>
  <input 
  type="password" 
  placeholder="Type here password" 
  class="input input-bordered w-full max-w-xs" 
  {...register("password",  {
      required: {
        value: true,
        message: 'Password is required'
      },
      minLength: {
      value: 6,
      message: 'Please provide 6 digit assword'
    }
  })}
  />
  <label class="label">
  {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  </label>
</div>
      {signInError}
      <input className='btn w-full max-w-xs' value='Login' type="submit" />
    </form>

    <p><small>New to Menufecturer-Co? <Link className='text-blue-500' to='/signup'> Create New Account</Link></small></p>
    <div className='divider'>OR</div>
    <button onClick={()=> signInWithGoogle()} className='btn btn-outline'>Continue With Google</button>
  </div>
</div>
        </div>
    );
};

export default Login;