<?php
use craft\elements\Entry;

return [
    'endpoints' => [
        'api/drinks' => function() {
            return [
                'elementType' => Entry::class,
                'criteria' => ['section' => 'drinks'],
                'transformer' => function(Entry $entry) {
                    $drinkImage = $entry->drinkImage->one(); // Gebruik de handle 'drinkImage'

                    return [
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'price' => $entry->price,
                        'country' => $entry->country,	
                        'details' => $entry->details,
                        'flavour' => $entry->flavour,
                        'image' => $drinkImage ? $drinkImage->url : null,
                        // Voeg andere velden toe zoals 'price', 'country', etc.
                    ];
                },
            ];
        },
    ],
];
