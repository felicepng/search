export interface Highlight {
    BeginOffset: number;
    EndOffset: number;
}

export interface ResultItem {
    Id?: string;
    Type?: string;
    DocumentId: string;
    DocumentTitle: {
        Text: string;
        Highlights: Highlight[];
    };
    DocumentExcerpt: {
        Text: string;
        Highlights: Highlight[];
    };
    DocumentURI: string;
}

export interface SearchDataType {
    TotalNumberOfResults: number;
    Page: number;
    PageSize: number;
    ResultItems: ResultItem[];
}

export interface SuggestionDataType {
    stemmedQueryTerm: string;
    suggestions: string[];
}