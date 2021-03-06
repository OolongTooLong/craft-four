<?php

return [
    'fields' => [
        'pageBuilder' => [
            'groups' => [
                [
//                    'label' => 'Text',
//                    'types' => ['text'],
                ],
            ],
            'types' => [
                'gridRow' => [
                    'tabs' => [
                        [
                            'label' => 'Row Content',
                            'fields' => ['blockRepeater'],
                        ],
                        [
                            'label' => 'Row Settings',
                            'fields' => ['rowWidth', 'blockLayout', 'gridGap', 'spaceTop', 'rowColour', 'paddingBottom', 'paddingTop', 'anchorLabel'],
                        ],
                        [
                            'label' => 'Advanced Settings',
                            'fields' => ['mediaQueries', 'backgroundImage', 'advancedSettings'],
                        ],
                    ],
                ],

            ],
        ],
        'heroBuilder' => [
            'groups' => [
                [
//                    'label' => 'Text',
//                    'types' => ['text'],
                ],
            ],
            'types' => [
                'static' => [
                    'tabs' => [
                        [
                            'label' => 'Content',
                            'fields' => ['media', 'heroContent'],
                        ],
                        [
                            'label' => 'Settings',
                            'fields' => ['heroWidth', 'contentWidth', 'gridGap', 'heroHeight', 'overlay', 'overlayType', 'opacity', 'blendMode', 'textColour', 'advancedOptions', 'paddingBottom', 'paddingTop', 'layout'],
                        ],
                    ],
                ],
                'heroSlides' => [
                    'tabs' => [
                        [
                            'label' => 'Content',
                            'fields' => ['slides', 'sliderSettings'],
                        ],
                        [
                            'label' => 'Settings',
                            'fields' => ['heroWidth', 'contentWidth', 'gridGap', 'heroHeight', 'overlay', 'overlayType', 'opacity', 'blendMode', 'textColour', 'arrows','navigation', 'autoplay', 'advancedOptions', 'paddingBottom', 'paddingTop'],
                        ],
                    ],
                ],
            ],
        ],
    ],
];
