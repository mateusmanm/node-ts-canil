import { Request, Response } from "express";

import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pet';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        pets: Pet.getAllPets(),
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
};

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        pets: Pet.getFromType('dog'),
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
};

export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        pets: Pet.getFromType('cat'),
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });
};

export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        pets: Pet.getFromType('fish'),
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });
};

