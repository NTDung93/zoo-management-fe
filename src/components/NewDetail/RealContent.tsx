import { NewsObj } from '../../models/news';
import './RealContent.css';

interface Props {
    news: NewsObj | null;
}

export default function RealContent({ news: news }: Props) {
    const createMarkup = () => {
        return {
            __html: `
        <div style="font-size: 16px; color: #333;">
          ${news?.content.replace(/<img /g, '<img style="max-width: 100%;" ')}
        </div>
      `,
        };
    };

    return (
        <>
            <div className="author" style={{ alignContent: 'end' }}>
                <div className="author-content">
                    <img src={news?.employee.image} className="author-image" />
                    <div className="author-info">
                        <h2 className="author-name">{news?.employee.fullName}</h2>
                        <p className="author-description">{news?.employee.email}</p>
                    </div>
                </div>
            </div>
            <div dangerouslySetInnerHTML={createMarkup()}>
            </div>
        </>
    )
}