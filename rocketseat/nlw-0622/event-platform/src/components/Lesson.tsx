import { CheckCircle, Lock  } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
    title: string;
    slug: string;
    availabelAt: Date;
    type: 'live' | 'class';
}

export default function Lesson(props: LessonProps) {

    const { slug } = useParams<{slug: string}>();

    const isLessonsAvailable = isPast(props.availabelAt);
    const availableDateFomatted = format(props.availabelAt, "EEEE ' • ' d 'de' MMMM' • 'k'h'mm", { locale: ptBR })

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">

            <span className="text-gray-300">
                {availableDateFomatted}
            </span>

            <div className={classNames(
                    'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',{
                        'bg-green-500': isActiveLesson
                    }
                )}>
                <header className="flex items-center justify-between">
                    
                    {isLessonsAvailable ? (
                        <span className={classNames(
                            'text-sm font-medium flex items-center gap-2', {
                                'text-white': isActiveLesson,
                                'text-blue-500': !isActiveLesson
                            }
                            )}>
                            <CheckCircle size={20} />
                            Conteudo Liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em Breve
                        </span>
                    )}

                    <span className={classNames(
                        'text-xs font-bold rounded py-[0.125rem] px-2 text-white border uppercase',{
                            'border-white': isActiveLesson,
                            'border-green-300': !isActiveLesson
                        }
                    )}>
                        {props.type === 'live' ? 'Ao Vivo' : 'Aula Prática'}
                    </span>
                </header>


                <strong className={classNames(
                    'mt-5 block',{
                        'text-white': isActiveLesson,
                        'text-gray-200': !isActiveLesson
                    }
                    )}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}