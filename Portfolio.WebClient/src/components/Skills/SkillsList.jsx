import { List, ListItem, ListItemText } from "@mui/material";

export default function SkillsList({ skills }) {
    return (
        <List sx={{ listStyle: "decimal", pt: 2 }}>
            {skills.map(x => (
                <ListItem
                    key={x.id}
                    disablePadding
                    sx={{ display: "list-item", textAlign: "center" }}
                >
                    <ListItemText primary={x.id} />
                </ListItem>
            ))}
        </List>
    );
}