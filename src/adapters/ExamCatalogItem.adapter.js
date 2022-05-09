
import React from 'react'
import ExamCatalogItem from '../models/entities/ExamCatalogItem.entitie';

const defaultExamCatalogItem = new ExamCatalogItem({});

export const ExamCatalogItemAdapter = (endpoint = defaultExamCatalogItem) => {

    return new ExamCatalogItem({
        cost: endpoint.cost,
        typeExam: endpoint.typeExam,
        idExamCatalog: endpoint.idExamCatalog
    });
}
