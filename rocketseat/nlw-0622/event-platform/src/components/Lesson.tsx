import { CheckCircle, Lock  } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availabelAt: Date;
    type: 'live' | 'class';
}

export default function Lesson(props: LessonProps) {

    const isLessonsAvailable = isPast(props.availabelAt);
    const availableDateFomatted = format(props.availabelAt, "EEEE ' • ' d 'de' MMMM' • 'k'h'mm", { locale: ptBR })

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">

            <span className="text-gray-300">
                {availableDateFomatted}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
                <header className="flex items-center justify-between">
                    
                    {isLessonsAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteudo Liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em Breve
                        </span>
                    )}

                    <span className="text-xs font-bold rounded py-[0.125rem] px-2 text-white border-green-300 border uppercase">
                        {props.type === 'live' ? 'Ao Vivo' : 'Aula Prática'}
                    </span>
                </header>


                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}