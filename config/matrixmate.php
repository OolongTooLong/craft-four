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
                            'fields' => ['rowWidth', 'maxWidth', 'blockLayout', 'gridGap', 'spaceTop', 'rowColour', 'paddingBottom', 'paddingTop', 'anchorLabel'],
                        ],
                        [
                            'label' => 'Advanced Settings',
                            'fields' => ['mediaQueries', 'backgroundImage', 'advancedSettings'],
                        ],
                    ],
                ],
                'channelRow' => [
                    'tabs' => [
                        [
                            'label' => 'Content',
                            'fields' => ['layouts', 'channelSelect', 'limit', 'options', 'popup', 'buttonStyle', 'imageCrop','hideButtons', 'showPostDate','useExcerptLimit', 'horizontalLine'],
                        ],
                        [
                            'label' => 'Settings',
                            'fields' => ['rowWidth', 'rowLayout', 'gridGap', 'spaceTop', 'rowColour', 'paddingBottom', 'paddingTop', 'advancedSettings'],
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
