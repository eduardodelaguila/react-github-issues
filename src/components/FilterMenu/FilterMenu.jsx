import React from 'react';

import { SelectMenu, Button } from '@primer/components';

import './FilterMenu.scss';

const FILTERS = [
    { filter: 'Open issues and pull requests', value: 'is:open' },
    { filter: 'Your issues', value: 'is:open is:issue author:@me ' },
    { filter: 'Your pull request', value: 'is:open is:pr author:@me ' },
    { filter: 'Everything assign to you', value: 'is:open assignee:@me ' },
    { filter: 'Everything mentioning you', value: 'is:open mentions:@me ' },
];

const FilterMenu = (props) => {
    const { onChange } = props;

    const renderFilters = () =>
        FILTERS.map(({ filter, value }, index) => (
            <span
                key={index}
                className="gh-filter-menu__item"
                onClick={() => onChange(value)}
            >
                {filter}
            </span>
        ));
    return (
        <SelectMenu>
            <Button as="summary">Filters</Button>
            <SelectMenu.Modal>
                <SelectMenu.Header>Filter Issues</SelectMenu.Header>
                {renderFilters()}
            </SelectMenu.Modal>
        </SelectMenu>
    );
};

export default FilterMenu;
