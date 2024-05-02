const SkillsList = ({ skills }) => {
    return (
        <ol>
            {
                skills.map(x => {
                    return (
                        <li key={x.id}>{x.id}</li>
                    )
                })
            }
        </ol>
    );
}

export default SkillsList;