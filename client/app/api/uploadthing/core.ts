import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

export const ourFileRouter = {
	imageUploader: f({
		image: { maxFileSize: '4MB', maxFileCount: 1 },
	})
		.middleware(async () => {
			const token = await getServerSession(authOptions);
			if (!token) {
				throw new UploadThingError('Unauthorized');
			}
			return { token };
		})
		.onUploadComplete(async ({ file }) => {
			// Return a plain JSON-serializable object instead of the UploadedFileData object
			return {
				key: file.key,
				name: file.name,
				size: file.size,
				type: file.type,
			};
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
