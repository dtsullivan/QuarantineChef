import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

const mealType = ["Breakfast", "Lunch", "Dinner"];
const cuisineType = ["American", "Asian", "Caribbean", "Chinese", "French", "Indian", "Italian",
    "Japanese", "Mediterranean", "Mexican", "Middle Eastern"];
const diet = ["high-fiber", "high-protein", "low-carb", "low-fat", "low-sodium"];
const health = ["dairy-free", "gluten-free", "keto-friendly", "kosher", "low-sugar", "paleo",
    "peanut-free", "vegan", "vegetarian"];

const filterTypes = [mealType, cuisineType, diet, health];

const hasFilter = new Map();
for (let type in filterTypes) {
    for (let i = 0; i < filterTypes[type].length; i++) {
        hasFilter.set(filterTypes[type][i], false);
    }
}
// console.log(hasFilter);

function enumerate(list) {
    let nums = [];
    for (let i = 0; i < list.length; i++) {
        nums.push(i);
    }
    return nums;
}

function titleCase(string) {
    let phrase = string.split("-");
    for (let i = 0; i < phrase.length; i++) {
        phrase[i] = phrase[i][0].toUpperCase() + phrase[i].slice(1);
    }
    return phrase.join(" ");
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: "center",
        alignItems: "flex-start",
        paddingBottom: 20,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    filterType: {
        textAlign: "left",
        paddingLeft: 15,
        fontWeight: theme.typography.fontWeightBold,
    }
}));

export default function FilterPanel() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);

        hasFilter.set(value, !hasFilter.get(value));
    };

    return (
        <div className={classes.root}>
            <ExpansionPanel className={classes.type}
                            key={"filters"}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"filters"}
                    id={"filters"}
                >
                    <Typography className={classes.heading}>{"FILTERS"}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>
                        <Typography className={classes.filterType}>Meal Type</Typography>
                        {enumerate(mealType).map((value) => {
                            const labelId = `checkbox-list-label-${mealType[value]}`;
                            return (
                                <ListItem key={mealType[value]}
                                          role={undefined}
                                          dense button onClick={handleToggle(mealType[value])}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(mealType[value]) !== -1}
                                            tabIndex={-1}
                                            color={'primary'}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId}
                                                  primary={titleCase(mealType[value])} />
                                </ListItem>
                            );
                        })}
                    </List>
                    <List>
                        <Typography className={classes.filterType}>Cuisine Type</Typography>
                        {enumerate(cuisineType).map((value) => {
                            const labelId = `checkbox-list-label-${cuisineType[value]}`;
                            return (
                                <ListItem key={cuisineType[value]}
                                          role={undefined}
                                          dense button onClick={handleToggle(cuisineType[value])}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(cuisineType[value]) !== -1}
                                            tabIndex={-1}
                                            color={'primary'}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId}
                                                  primary={titleCase(cuisineType[value])} />
                                </ListItem>
                            );
                        })}
                    </List>
                    <List>
                        <Typography className={classes.filterType}>Diet</Typography>
                        {enumerate(diet).map((value) => {
                            const labelId = `checkbox-list-label-${diet[value]}`;
                            return (
                                <ListItem key={diet[value]}
                                          role={undefined}
                                          dense button onClick={handleToggle(diet[value])}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(diet[value]) !== -1}
                                            tabIndex={-1}
                                            color={'primary'}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId}
                                                  primary={titleCase(diet[value])} />
                                </ListItem>
                            );
                        })}
                    </List>
                    <List>
                        <Typography className={classes.filterType}>Health</Typography>
                        {enumerate(health).map((value) => {
                            const labelId = `checkbox-list-label-${health[value]}`;
                            return (
                                <ListItem key={health[value]}
                                          role={undefined}
                                          dense button onClick={handleToggle(health[value])}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(health[value]) !== -1}
                                            tabIndex={-1}
                                            color={'primary'}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId}
                                                  primary={titleCase(health[value])} />
                                </ListItem>
                            );
                        })}
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
