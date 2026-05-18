import { notFound } from "next/navigation";
import { getQuizBySlug, quizzes } from "@/data/quizzes";
import Quiz from "@/components/Quiz";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return quizzes.map((quiz) => ({
    slug: quiz.slug,
  }));
}

export default async function QuizPage({ params }: Props) {
  const resolvedParams = await params;
  const quiz = getQuizBySlug(resolvedParams.slug);

  if (!quiz) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-8">    
      <div className="max-w-4xl mx-auto">
        <Quiz quiz={quiz} />
      </div>
    </div>
  );
}
