'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema } from '@/lib/types';
import { Form, FormControl, FormDescription, FormField,
FormItem, FormMessage } from '@/components/ui/form';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/cypresslogo.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Loader from '@/components/global/Loader';
import Template from '../temple';
//import { Separator } from '@/components/ui/separator';
//import { actionLoginUser } from '@/lib/server-actions/auth-actions';

const LoginPage = () => {
    const router = useRouter();
    const [submitError, setSubmitError] = useState('');

    const form = useForm<z.infer<typeof FormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(FormSchema),
        defaultValues: {email: '', password: ''},
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit:SubmitHandler<z.infer<typeof FormSchema>> =  async (formData) => {

    };

    return (
    <Template>
    <Form {...form}>
        <form onChange={() => {
            if(submitError) {
                setSubmitError('')
            }
        }} 
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full sm:justify-center sm:w-[400px] psace-y-6
        flex flex-col'>
            <Link href="/" 
            className='
            w-full
            flex 
            justify-left
            items-center
            '>
                <Image src={Logo} alt='Logo' width={50} height={50}/>
                <span className='font-semibold dark:text-white text-4xl ml-2'>Notion Clone</span>
            </Link>
            <FormDescription
            className="
        text-foreground/60"
        >
            An all-In-One Collaboration and Productivity Platform
        </FormDescription>
        <div className='mt-4 mb-4'>
        <FormField
            disabled={isLoading}
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem>
                <FormControl>
                <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        </div>
        <div className='mb-4'>
        <FormField
            disabled={isLoading}
            control={form.control}
            name="password"
            render={({ field }) => (
            <FormItem>
                <FormControl>
                <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        </div>
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button
            type="submit"
            className="w-full p-6 mb-4 mt-4"
            size="lg"
            disabled={isLoading}
        >
            {!isLoading ? 'Login' : <Loader />}
        </Button>
        <span className="self-container">
            Dont have an account?{' '}
        <Link
            href="/signup"
            className="text-primary"
        >
            Sign Up
        </Link>
        </span>
        </form>
    </Form>
    </Template>
    )
}

export default LoginPage