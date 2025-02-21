'use client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { addCommentToThread, createThread } from '@/lib/actions/thread.actions';
import { CommentValidation } from '@/lib/validation/thread';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Image from 'next/image';

type Props = {
    threadId: string;
    currentUserImg: string;
    currentUserId: string;
};

function Comment({ threadId, currentUserImg, currentUserId }: Props) {
    const router = useRouter();
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver(CommentValidation),
        defaultValues: {
            thread: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
        await addCommentToThread(threadId, values.thread, JSON.parse(currentUserId), pathname);

        form.reset();
    };

    return (
        <div>
            <h1 className="text-white">Comment Form</h1>
            <Form {...form}>
                <form className="comment-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="thread"
                        render={({ field }) => (
                            <FormItem className="flex w-full items-center gap-3">
                                <FormLabel>
                                    <Image
                                        src={currentUserImg}
                                        alt="profile image"
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover"
                                    />
                                </FormLabel>
                                <FormControl className="border-none bg-transparent">
                                    <Input
                                        type="text"
                                        placeholder="Comment..."
                                        className="no-focus text-light-1 outline-none"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="comment-form_btn">
                        Reply
                    </Button>
                </form>
            </Form>
        </div>
    );
}

export default Comment;
