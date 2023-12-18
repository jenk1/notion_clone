'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema } from '@/lib/types';
import { Form } from '@/components/ui/form';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/cypresslogo.svg';

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
        </form>
    </Form>
    )
}

export default LoginPage