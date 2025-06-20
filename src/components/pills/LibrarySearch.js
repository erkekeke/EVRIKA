import {AppLayout} from "../../AppLayout";
import React, {useEffect, useState} from "react";
import Select from "react-select";
import DatePicker, {registerLocale} from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import ru from "date-fns/locale/ru";

registerLocale("ru", ru);

const books = [
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'Professionally oriented English for students of economic specialties. Study aid',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
]

const magazines = [
    {
        title: 'ЖУРНАЛ ЖУРНАЛ ЖУРНАЛ',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'ЖУРНАЛ ЖУРНАЛ ЖУРНАЛ',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'ЖУРНАЛ ЖУРНАЛ ЖУРНАЛ',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'ЖУРНАЛ ЖУРНАЛ ЖУРНАЛ',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'ЖУРНАЛ ЖУРНАЛ ЖУРНАЛ',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'ЖУРНАЛ ЖУРНАЛ ЖУРНАЛ',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'ЖУРНАЛ ЖУРНАЛ ЖУРНАЛ',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'ЖУРНАЛ ЖУРНАЛ ЖУРНАЛ',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'ЖУРНАЛ ЖУРНАЛ ЖУРНАЛ',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'ЖУРНАЛ ЖУРНАЛ ЖУРНАЛ',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'ЖУРНАЛ ЖУРНАЛ ЖУРНАЛ',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
    {
        title: 'ЖУРНАЛ ЖУРНАЛ ЖУРНАЛ',
        authors: ['Адам Драйвер', 'Мила Кунис'],
        year: '2023',
        publishingHouse: ['Hollywood Empire'],
        description: 'The purpose of studying the discipline «Professionally oriented English language» is teaching professionally oriented foreign language communication ....',
        sourceIcon: '/img/temp/lan-icon.svg'
    },
]

const sources = [
    {
        id: 'ipr-smart',
        name: 'ЭБС IPR Smart',
        linkPath: '/img/temp/ipr-smart.svg',
    },
    {
        id: 'fallow-deer',
        name: 'ЭБС Лань',
        linkPath: '/img/temp/fallow-deer.svg',
    },
    {
        id: 'luban',
        name: 'ЭБС Любань',
        linkPath: '/img/temp/luban.svg',
    },
    {
        id: 'ololo',
        name: 'ЭБС Ололо',
        linkPath: '/img/temp/ololo.svg',
    },
]

function BookCard({title, authors, year, publishingHouse, description, sourceIcon, index}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);

        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`book-card ${isVisible ? 'visible' : ''}`}>
            <div className="book-header d-flex justify-content-between">
                <p className="book-title text-decoration-underline">
                    {title}
                </p>

                <div className="d-flex gap-10">
                    <div>
                        <img src={sourceIcon} alt=""/>
                    </div>

                    <div className="download-button">
                        <img src="/img/library-search/download-icon.svg" alt=""/>
                    </div>
                </div>
            </div>

            <div className="book-content">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="authors-block">
                            Авторы:
                            <span> {authors.join(', ')}</span>
                        </div>

                        <div className="publishing-house-block">
                            Издательство:
                            <span> {publishingHouse.join(', ')}</span>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="year-block text-end">
                            Год:
                            <span> {year}</span>
                        </div>
                    </div>
                </div>

                <div className="description-block">
                    <p className="description">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

function SourceFilterElement({linkPath}) {
    return (
        <div id='source-filter-element'>
            <label className="custom-checkbox">
                <input
                    type="checkbox"
                />
                <span className="checkmark"></span>

                <img src={linkPath} alt=""/>
            </label>
        </div>
    );
}

function LibrarySearch() {
    const [visibleBooks, setVisibleBooks] = useState(3);
    const [visibleMagazines, setVisibleMagazines] = useState(3);
    const [activeTab, setActiveTab] = useState('books');

    const tabs = [
        { id: 'books', title: 'Книги' },
        { id: 'magazines', title: 'Журналы' },
    ];

    const loadMoreBooks = () => {
        setVisibleBooks(prev => prev + 3);
    }

    const loadMoreMagazines = () => {
        setVisibleMagazines(prev => prev + 3);
    }

    const sourcesOptions = sources.map(resource => ({
        value: resource.id,
        label: resource.name,
        icon: resource.linkPath,
    }));

    const formatOptionLabel = ({label, icon}) => (
        <div className="d-flex align-items-center">
            <img src={icon} alt={label} style={{width: '20px', marginRight: '10px'}}/>
            {label}
        </div>
    );

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <AppLayout>
            <div id="library-search" className="main-container">
                <div className="content-block">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="content-block-title">
                                Единый поиск по библиотеке
                            </div>

                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Введите поисковой запрос"
                                    aria-label="Search"
                                />

                                <div className="input-group-append">
                                    <button
                                        id="search-button"
                                        className="btn h-100 w-100"
                                        type="button"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.4998 2C9.14436 2.00012 7.80863 2.32436 6.60402 2.94569C5.39941 3.56702 4.36086 4.46742 3.575 5.57175C2.78914 6.67609 2.27878 7.95235 2.08647 9.29404C1.89417 10.6357 2.02551 12.004 2.46954 13.2846C2.91357 14.5652 3.65741 15.7211 4.639 16.6557C5.62059 17.5904 6.81147 18.2768 8.11228 18.6576C9.41309 19.0384 10.7861 19.1026 12.1168 18.8449C13.4475 18.5872 14.6972 18.015 15.7618 17.176L19.4138 20.828C19.6024 21.0102 19.855 21.111 20.1172 21.1087C20.3794 21.1064 20.6302 21.0012 20.8156 20.8158C21.001 20.6304 21.1062 20.3796 21.1084 20.1174C21.1107 19.8552 21.0099 19.6026 20.8278 19.414L17.1758 15.762C18.1638 14.5086 18.7789 13.0024 18.9509 11.4157C19.1228 9.82905 18.8446 8.22602 18.148 6.79009C17.4514 5.35417 16.3646 4.14336 15.0121 3.29623C13.6595 2.44911 12.0957 1.99989 10.4998 2ZM3.99977 10.5C3.99977 8.77609 4.68458 7.12279 5.90357 5.90381C7.12256 4.68482 8.77586 4 10.4998 4C12.2237 4 13.877 4.68482 15.096 5.90381C16.3149 7.12279 16.9998 8.77609 16.9998 10.5C16.9998 12.2239 16.3149 13.8772 15.096 15.0962C13.877 16.3152 12.2237 17 10.4998 17C8.77586 17 7.12256 16.3152 5.90357 15.0962C4.68458 13.8772 3.99977 12.2239 3.99977 10.5Z"
                                                fill="#88C62A"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <ul className="nav">
                                {tabs.map((tab) => (
                                    <li className="nav-item" role="presentation" key={tab.id}>
                                        <button
                                            className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                                            id={`${tab.id}-tab`}
                                            type="button"
                                            role="tab"
                                            onClick={() => setActiveTab(tab.id)}
                                            aria-selected={activeTab === tab.id}
                                        >
                                            {tab.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div id="books-block" className="publications-block">
                                <div className={`publications-block-content ${activeTab === 'books' ? 'opened' : ''}`}>
                                    {books.slice(0, visibleBooks).map((book, index) => (
                                        <BookCard
                                            key={index}
                                            index={index}
                                            title={book.title}
                                            authors={book.authors}
                                            year={book.year}
                                            publishingHouse={book.publishingHouse}
                                            description={book.description}
                                            sourceIcon={book.sourceIcon}
                                        />
                                    ))}

                                    {visibleBooks < books.length && (
                                        <button
                                            className="show-more-button d-flex align-items-center"
                                            onClick={loadMoreBooks}
                                        >
                                            <span>Показать еще результаты</span>
                                            <img src="/img/library-search/show-more-icon.svg" alt=""/>
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div id="magazines" className="publications-block">
                                <div className={`publications-block-content ${activeTab === 'magazines' ? 'opened' : ''}`}>
                                    {magazines.slice(0, visibleMagazines).map((book, index) => (
                                        <BookCard
                                            key={index}
                                            index={index}
                                            title={book.title}
                                            authors={book.authors}
                                            year={book.year}
                                            publishingHouse={book.publishingHouse}
                                            description={book.description}
                                            sourceIcon={book.sourceIcon}
                                        />
                                    ))}

                                    {visibleMagazines < magazines.length && (
                                        <button
                                            className="show-more-button d-flex align-items-center"
                                            onClick={loadMoreMagazines}
                                        >
                                            <span>Показать еще результаты</span>
                                            <img src="/img/library-search/show-more-icon.svg" alt=""/>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div id="filters" className="d-flex flex-column">
                                <div id="filter-by-sourses-block">
                                    <label className="filter-title">Источники</label>

                                    <div className="sources-block d-flex flex-column gap-10">
                                        {sources.map((index, source) => (
                                            <SourceFilterElement key={index} linkPath={index.linkPath}/>
                                        ))}
                                    </div>
                                </div>

                                <div id="filter-by-year-publication">
                                    <div className="filter-title">Год издания</div>

                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                dateFormat="dd.MM.yyyy"
                                                placeholderText="От"
                                                className="w-100"
                                                locale="ru"
                                            />
                                        </div>

                                        <div className="col-lg-6">
                                            <DatePicker
                                                selected={endDate}
                                                onChange={(date) => setEndDate(date)}
                                                dateFormat="dd.MM.yyyy"
                                                placeholderText="До"
                                                className="w-100"
                                                locale="ru"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div id="filter-by-publishing-house">
                                    <div className="filter-title">Издательство</div>

                                    <Select
                                        placeholder="Введите или выберите из списка"
                                        styles={{
                                            placeholder: (provided) => ({
                                                ...provided,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }),
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default LibrarySearch;
