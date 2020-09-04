import React, { useState, useEffect, useCallback } from 'react';

import { getLabels, getMilestones } from 'service';

export const RepoContext = React.createContext();

export const RepoProvider = ({ children }) => {
    const [labels, setLabels] = useState([]);
    const [milestones, setMilestones] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const initRepoData = async () => {
            try {
                // const labelsData = await getLabels();
                // setLabels(labelsData);
                // const milestonesData = await getMilestones();
                // setMilestones(milestonesData);
            } catch (error) {
                setErrors(error);
            }
        };
        initRepoData();
    }, []);

    return (
        <RepoContext.Provider
            value={{ labels, milestones, repoErrors: errors }}
        >
            {children}
        </RepoContext.Provider>
    );
};
