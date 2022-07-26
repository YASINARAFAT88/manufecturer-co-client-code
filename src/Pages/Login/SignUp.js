import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import {Link, useNavigate} from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const [token] = useToken(user || gUser);

      const navigate = useNavigate();

      let signInError;

      if(loading || gLoading || updating){
          return <Loading />
      }
      if(error || gError || updateError){
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
      }

    if(token){
        console.log(user)
        navigate('/dashboard/:dashboardId')
    }
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done')
        
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                 <h2 className="text-center text-2xl font-bold">Sign Up</h2>

    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Name</span>
  </label>
  <input 
  type="text" 
  placeholder="Type your Name" 
  class="input input-bordered w-full max-w-xs" 
  {...register("name",  {
      required: {
        value: true,
        message: 'Name is required'
      }
  })}
  />
  <label class="label">
  {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
  
  </label>
</div>
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
      <input className='btn w-full max-w-xs' value='SIGNUP' type="submit" />
    </form>

    <p><small>All ready have an Account? <Link className='text-blue-500' to='/login'> Please Login</Link></small></p>
    <div className='divider'>OR</div>
    <button onClick={()=> signInWithGoogle()} className='btn btn-outline'>Continue With Google</button>
  </div>
</div>
        </div>
    );
};

export default SignUp;