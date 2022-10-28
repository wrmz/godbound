<script>
    import Navigation from '$lib/components/Navigation.svelte';
</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,700;1,300;1,700&display=swap" rel="stylesheet">
</svelte:head>
<Navigation />
<main>
    <slot></slot>
</main>
<style>
    /**
    * @license
    * MyFonts Webfont Build ID 742439
    *
    * The fonts listed in this notice are subject to the End User License
    * Agreement(s) entered into by the website owner. All other parties are
    * explicitly restricted from using the Licensed Webfonts(s).
    *
    * You may obtain a valid license from one of MyFonts official sites.
    * http://www.fonts.com
    * http://www.myfonts.com
    * http://www.linotype.com
    *
    */
    @font-face {
        font-family: 'RunistaSymbols';
        src: url('fonts/RunistaSymbols/font.woff2') format('woff2'), url('fonts/RunistaSymbols/font.woff') format('woff');
    }
    @font-face {
        font-family: 'RunistaDecorative';
        src: url('fonts/RunistaDecorative/font.woff2') format('woff2'), url('fonts/RunistaDecorative/font.woff') format('woff');
    }
    @font-face {
        font-family: 'Primitive';
        src: url('fonts/Primitive/font.woff2') format('woff2'), url('fonts/Primitive/font.woff') format('woff');
    }

    :root {
        --nav-height: 70px;

        /** Fonts */
        --font-display: 'RunistaDecorative', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        --font-symbol: 'RunistaSymbols';
        --font-rune: 'Primitive';
        --font-copy: 'Merriweather', serif;


        /** Palette */

        --color-transparent: #00000000;

        --color-yellow: #ffed72;
        --color-orange: #ffb270;
        --color-red: #ff6d7e;
        --color-green: #a2e57b;
        --color-blue: #7cd5f1;
        --color-purple: #baa0f8;

        --color-0: #161b1e;
        --color-1: #1d2528;
        --color-2: #273136;
        --color-3: #3a4449;
        --color-4: #545f62;
        --color-5: #6b7678;
        --color-6: #8b9798;
        --color-7: #b8c4c3;
        --color-8: #f2fffc;



        --color-activity-bar-active-focus-border: var(--color-yellow);
        --color-activity-bar-background: var(--color-0);
        --color-activity-bar-border: var(--color-0);
        --color-activity-bar-foreground: var(--color-7);
        --color-activity-bar-inactive-foreground: var(--color-4);
        --color-activity-bar-badge-background: var(--color-yellow);
        --color-activity-bar-badge-foreground: var(--color-2);
        --color-badge-background: var(--color-yellow);
        --color-badge-foreground: var(--color-2);
        --color-banner-background: var(--color-3);
        --color-banner-foreground: var(--color-7);
        --color-banner-icon-foreground: var(--color-7);
        --color-breadcrumb-active-selection-foreground: var(--color-8);
        --color-breadcrumb-focus-foreground: var(--color-7);
        --color-breadcrumb-foreground: var(--color-6);
        --color-button-background: var(--color-3);
        --color-button-foreground: var(--color-7);

        --color-button-hover-background: var(--color-4);
        --color-button-secondary-background: var(--color-3);
        --color-button-secondary-foreground: var(--color-7);
        --color-button-secondary-hover-background: var(--color-4);
        --color-button-separator: var(--color-2);
        --color-charts-blue: var(--color-blue);
        --color-charts-foreground: var(--color-8);
        --color-charts-green: var(--color-green);
        --color-charts-lines: var(--color-5);
        --color-charts-orange: var(--color-orange);
        --color-charts-purple: var(--color-purple);
        --color-charts-red: var(--color-red);
        --color-charts-yellow: var(--color-yellow);
        --color-checkbox-background: var(--color-3);
        --color-checkbox-border: var(--color-3);
        --color-checkbox-foreground: var(--color-8);
        --color-command-center-active-background: var(--color-2);
        --color-command-center-active-foreground: var(--color-7);
        --color-command-center-background: var(--color-1);
        --color-command-center-border: var(--color-2);
        --color-command-center-foreground: var(--color-6);
        --color-debug-console-error-foreground: var(--color-red);
        --color-debug-console-info-foreground: var(--color-blue);
        --color-debug-console-source-foreground: var(--color-8);
        --color-debug-console-warning-foreground: var(--color-orange);
        --color-debug-console-input-icon-foreground: var(--color-yellow);
        --color-debug-exception-widget-background: var(--color-3);
        --color-debug-exception-widget-border: var(--color-2);
        --color-debug-icon-breakpoint-current-stackframe-foreground: var(--color-yellow);
        --color-debug-icon-breakpoint-disabled-foreground: var(--color-7);
        --color-debug-icon-breakpoint-foreground: var(--color-red);
        --color-debug-icon-breakpoint-stackframe-foreground: var(--color-8);
        --color-debug-icon-breakpoint-unverified-foreground: var(--color-orange);
        --color-debug-icon-continue-foreground: var(--color-8);
        --color-debug-icon-disconnect-foreground: var(--color-8);
        --color-debug-icon-pause-foreground: var(--color-8);
        --color-debug-icon-restart-foreground: var(--color-green);
        --color-debug-icon-start-foreground: var(--color-green);
        --color-debug-icon-step-back-foreground: var(--color-8);
        --color-debug-icon-step-into-foreground: var(--color-8);
        --color-debug-icon-step-out-foreground: var(--color-8);
        --color-debug-icon-step-over-foreground: var(--color-8);
        --color-debug-icon-stop-foreground: var(--color-red);
        --color-debug-token-expression-boolean: var(--color-orange);
        --color-debug-token-expression-error: var(--color-red);
        --color-debug-token-expression-name: var(--color-blue);
        --color-debug-token-expression-number: var(--color-purple);
        --color-debug-token-expression-string: var(--color-yellow);
        --color-debug-token-expression-value: var(--color-8);
        --color-debug-tool-bar-background: var(--color-3);
        --color-debug-view-exception-label-background: var(--color-red);
        --color-debug-view-exception-label-foreground: var(--color-2);
        --color-debug-view-state-label-background: var(--color-green);
        --color-debug-view-state-label-foreground: var(--color-2);
        --color-debug-view-value-changed-highlight: var(--color-yellow);
        --color-description-foreground: var(--color-6);
        --color-diff-editor-diagonal-fill: var(--color-3);
        --color-diff-editor-inserted-line-background: var(--color-green)19;
        --color-diff-editor-inserted-text-background: var(--color-green)19;
        --color-diff-editor-removed-line-background: var(--color-red)19;
        --color-diff-editor-removed-text-background: var(--color-red)19;
        --color-diff-editor-gutter-inserted-line-background: var(--color-green)19;
        --color-diff-editor-gutter-removed-line-background: var(--color-red)19;
        --color-diff-editor-overview-inserted-foreground: var(--color-green)a5;
        --color-diff-editor-overview-removed-foreground: var(--color-red)a5;
        --color-dropdown-background: var(--color-2);
        --color-dropdown-border: var(--color-2);
        --color-dropdown-foreground: var(--color-6);
        --color-dropdown-list-background: var(--color-3);
        --color-editor-background: var(--color-2);
        --color-editor-find-match-background: var(--color-8)26;
        --color-editor-find-match-border: var(--color-yellow);
        --color-editor-find-match-highlight-background: var(--color-8)26;
        --color-editor-find-match-highlight-border: var(--color-transparent);
        --color-editor-find-range-highlight-background: var(--color-8)0c;
        --color-editor-find-range-highlight-border: var(--color-transparent);
        --color-editor-focused-stack-frame-highlight-background: var(--color-7)26;
        --color-editor-fold-background: var(--color-8)0c;
        --color-editor-foreground: var(--color-8);
        --color-editor-hover-highlight-background: var(--color-8)0c;
        --color-editor-inactive-selection-background: var(--color-8)0c;
        --color-editor-inline-values-background: var(--color-4);
        --color-editor-inline-values-foreground: var(--color-7);
        --color-editor-line-highlight-background: var(--color-8)0c;
        --color-editor-line-highlight-border: var(--color-transparent);
        --color-editor-linked-editing-background: var(--color-3);
        --color-editor-range-highlight-background: var(--color-3);
        --color-editor-range-highlight-border: var(--color-3);
        --color-editor-selection-background: var(--color-7)26;
        --color-editor-selection-highlight-background: var(--color-8)26;
        --color-editor-selection-highlight-border: var(--color-transparent);
        --color-editor-stack-frame-highlight-background: var(--color-7)26;
        --color-editor-word-highlight-background: var(--color-8)26;
        --color-editor-word-highlight-border: var(--color-transparent);
        --color-editor-word-highlight-strong-background: var(--color-8)26;
        --color-editor-word-highlight-strong-border: var(--color-transparent);
        --color-editor-bracket-highlight-foreground1: var(--color-red);
        --color-editor-bracket-highlight-foreground2: var(--color-orange);
        --color-editor-bracket-highlight-foreground3: var(--color-yellow);
        --color-editor-bracket-highlight-foreground4: var(--color-green);
        --color-editor-bracket-highlight-foreground5: var(--color-blue);
        --color-editor-bracket-highlight-foreground6: var(--color-purple);
        --color-editor-bracket-match-background: var(--color-2);
        --color-editor-bracket-match-border: var(--color-5);
        --color-editor-code-lens-foreground: var(--color-5);
        --color-editor-cursor-background: var(--color-2);
        --color-editor-cursor-foreground: var(--color-8);
        --color-editor-error-background: var(--color-transparent);
        --color-editor-error-border: var(--color-transparent);
        --color-editor-error-foreground: var(--color-red);
        --color-editor-group-border: var(--color-1);
        --color-editor-group-drop-background: var(--color-1)bf;
        --color-editor-group-empty-background: var(--color-0);
        --color-editor-group-focused-empty-border: var(--color-1);
        --color-editor-group-header-no-tabs-background: var(--color-2);
        --color-editor-group-header-tabs-background: var(--color-2);
        --color-editor-group-header-tabs-border: var(--color-2);
        --color-editor-gutter-added-background: var(--color-green);
        --color-editor-gutter-background: var(--color-2);
        --color-editor-gutter-deleted-background: var(--color-red);
        --color-editor-gutter-folding-control-foreground: var(--color-7);
        --color-editor-gutter-modified-background: var(--color-orange);
        --color-editor-hint-border: var(--color-2);
        --color-editor-hint-foreground: var(--color-purple);
        --color-editor-hover-widget-background: var(--color-3);
        --color-editor-hover-widget-border: var(--color-2);
        --color-editor-indent-guide-background: var(--color-3);
        --color-editor-info-background: var(--color-transparent);
        --color-editor-info-border: var(--color-2);
        --color-editor-info-foreground: var(--color-blue);
        --color-editor-light-bulb-foreground: var(--color-yellow);
        --color-editor-light-bulb-auto-fix-foreground: var(--color-green);
        --color-editor-line-number-active-foreground: var(--color-7);
        --color-editor-line-number-foreground: var(--color-4);
        --color-editor-link-active-foreground: var(--color-blue);
        --color-editor-marker-navigation-background: var(--color-3);
        --color-editor-marker-navigation-error-background: var(--color-red);
        --color-editor-marker-navigation-info-background: var(--color-blue);
        --color-editor-marker-navigation-warning-background: var(--color-orange);
        --color-editor-overview-ruler-added-foreground: var(--color-green);
        --color-editor-overview-ruler-border: var(--color-2);
        --color-editor-overview-ruler-current-content-foreground: var(--color-3);
        --color-editor-overview-ruler-deleted-foreground: var(--color-red);
        --color-editor-overview-ruler-error-foreground: var(--color-red);
        --color-editor-overview-ruler-find-match-foreground: var(--color-8)26;
        --color-editor-overview-ruler-incoming-content-foreground: var(--color-3);
        --color-editor-overview-ruler-info-foreground: var(--color-blue);
        --color-editor-overview-ruler-modified-foreground: var(--color-orange);
        --color-editor-overview-ruler-range-highlight-foreground: var(--color-8)26;
        --color-editor-overview-ruler-selection-highlight-foreground: var(--color-8)26;
        --color-editor-overview-ruler-warning-foreground: var(--color-orange);
        --color-editor-overview-ruler-word-highlight-foreground: var(--color-8)26;
        --color-editor-overview-ruler-word-highlight-strong-foreground: var(--color-8)26;
        --color-editor-pane-background: var(--color-2);
        --color-editor-ruler-foreground: var(--color-4);
        --color-editor-suggest-widget-background: var(--color-3);
        --color-editor-suggest-widget-border: var(--color-3);
        --color-editor-suggest-widget-foreground: var(--color-7);
        --color-editor-suggest-widget-highlight-foreground: var(--color-8);
        --color-editor-suggest-widget-selected-background: var(--color-5);
        --color-editor-unnecessary-code-opacity: var(--color-transparent-67);
        --color-editor-warning-background: var(--color-transparent);
        --color-editor-warning-border: var(--color-transparent);
        --color-editor-warning-foreground: var(--color-orange);
        --color-editor-whitespace-foreground: var(--color-4);
        --color-editor-widget-background: var(--color-3);
        --color-editor-widget-border: var(--color-3);
        --color-error-foreground: var(--color-red);
        --color-extension-badge-remote-foreground: var(--color-green);
        --color-extension-button-prominent-background: var(--color-3);
        --color-extension-button-prominent-foreground: var(--color-8);
        --color-extension-button-prominent-hover-background: var(--color-4);
        --color-extension-icon-pre-release-foreground: var(--color-purple);
        --color-extension-icon-sponsor-foreground: var(--color-blue);
        --color-extension-icon-star-foreground: var(--color-yellow);
        --color-extension-icon-verified-foreground: var(--color-green);
        --color-focus-border: var(--color-5);
        --color-foreground: var(--color-8);
        --color-git-decoration-added-resource-foreground: var(--color-green);
        --color-git-decoration-conflicting-resource-foreground: var(--color-orange);
        --color-git-decoration-deleted-resource-foreground: var(--color-red);
        --color-git-decoration-ignored-resource-foreground: var(--color-4);
        --color-git-decoration-modified-resource-foreground: var(--color-yellow);
        --color-git-decoration-stage-deleted-resource-foreground: var(--color-red);
        --color-git-decoration-stage-modified-resource-foreground: var(--color-yellow);
        --color-git-decoration-untracked-resource-foreground: var(--color-7);
        --color-icon-foreground: var(--color-6);
        --color-input-background: var(--color-3);
        --color-input-border: var(--color-3);
        --color-input-foreground: var(--color-8);
        --color-input-placeholder-foreground: var(--color-5);
        --color-input-option-active-background: var(--color-4);
        --color-input-option-active-border: var(--color-4);
        --color-input-option-active-foreground: var(--color-8);
        --color-input-option-hover-background: var(--color-4);
        --color-input-validation-error-background: var(--color-3);
        --color-input-validation-error-border: var(--color-red);
        --color-input-validation-error-foreground: var(--color-red);
        --color-input-validation-info-background: var(--color-3);
        --color-input-validation-info-border: var(--color-blue);
        --color-input-validation-info-foreground: var(--color-blue);
        --color-input-validation-warning-background: var(--color-3);
        --color-input-validation-warning-border: var(--color-orange);
        --color-input-validation-warning-foreground: var(--color-orange);
        --color-keybinding-label-background: var(--color-4);
        --color-keybinding-label-border: var(--color-4);
        --color-keybinding-label-bottom-border: var(--color-3);
        --color-keybinding-label-foreground: var(--color-7);
        --color-list-active-selection-background: var(--color-8)0c;
        --color-list-active-selection-foreground: var(--color-yellow);
        --color-list-drop-background: var(--color-1)bf;
        --color-list-error-foreground: var(--color-red);
        --color-list-focus-background: var(--color-2);
        --color-list-focus-foreground: var(--color-8);
        --color-list-highlight-foreground: var(--color-8);
        --color-list-hover-background: var(--color-8)0c;
        --color-list-hover-foreground: var(--color-8);
        --color-list-inactive-focus-background: var(--color-2);
        --color-list-inactive-selection-background: var(--color-7)0c;
        --color-list-inactive-selection-foreground: var(--color-yellow);
        --color-list-invalid-item-foreground: var(--color-red);
        --color-list-warning-foreground: var(--color-orange);
        --color-list-filter-widget-background: var(--color-2);
        --color-list-filter-widget-no-matches-outline: var(--color-red);
        --color-list-filter-widget-outline: var(--color-2);
        --color-menu-background: var(--color-2);
        --color-menu-border: var(--color-1);
        --color-menu-foreground: var(--color-8);
        --color-menu-selection-foreground: var(--color-yellow);
        --color-menu-separator-background: var(--color-3);
        --color-menubar-selection-foreground: var(--color-8);
        --color-merge-border: var(--color-2);
        --color-merge-common-content-background: var(--color-8)19;
        --color-merge-common-header-background: var(--color-8)26;
        --color-merge-current-content-background: var(--color-red)19;
        --color-merge-current-header-background: var(--color-red)26;
        --color-merge-incoming-content-background: var(--color-green)19;
        --color-merge-incoming-header-background: var(--color-green)26;
        --color-merge-editor-change-background: var(--color-8)19;
        --color-merge-editor-change-word-background: var(--color-8)19;
        --color-merge-editor-conflict-handled-minimap-over-view-ruler: var(--color-green);
        --color-merge-editor-conflict-handled-focused-border: var(--color-green);
        --color-merge-editor-conflict-handled-unfocused-border: var(--color-green);
        --color-merge-editor-conflict-unhandled-minimap-over-view-ruler: var(--color-red);
        --color-merge-editor-conflict-unhandled-focused-border: var(--color-red);
        --color-merge-editor-conflict-unhandled-unfocused-border: var(--color-red);
        --color-minimap-error-highlight: var(--color-red)a5;
        --color-minimap-find-match-highlight: var(--color-6)a5;
        --color-minimap-selection-highlight: var(--color-7)26;
        --color-minimap-selection-occurrence-highlight: var(--color-5)a5;
        --color-minimap-warning-highlight: var(--color-orange)a5;
        --color-minimap-gutter-added-background: var(--color-green);
        --color-minimap-gutter-deleted-background: var(--color-red);
        --color-minimap-gutter-modified-background: var(--color-yellow);
        --color-notebook-cell-border-color: var(--color-3);
        --color-notebook-cell-editor-background: var(--color-1)7f;
        --color-notebook-cell-insertion-indicator: var(--color-8);
        --color-notebook-cell-status-bar-item-hover-background: var(--color-5);
        --color-notebook-cell-toolbar-separator: var(--color-3);
        --color-notebook-editor-background: var(--color-2);
        --color-notebook-focused-editor-border: var(--color-5);
        --color-notebook-status-error-icon-foreground: var(--color-red);
        --color-notebook-status-running-icon-foreground: var(--color-8);
        --color-notebook-status-success-icon-foreground: var(--color-green);
        --color-notification-center-border: var(--color-3);
        --color-notification-center-header-background: var(--color-3);
        --color-notification-center-header-foreground: var(--color-6);
        --color-notification-link-foreground: var(--color-yellow);
        --color-notifications-background: var(--color-3);
        --color-notifications-border: var(--color-3);
        --color-notifications-foreground: var(--color-7);
        --color-notifications-error-icon-foreground: var(--color-red);
        --color-notifications-info-icon-foreground: var(--color-blue);
        --color-notifications-warning-icon-foreground: var(--color-orange);
        --color-notification-toast-border: var(--color-3);
        --color-panel-background: var(--color-3);
        --color-panel-border: var(--color-2);
        --color-panel-drop-background: var(--color-1)bf;
        --color-panel-title-active-border: var(--color-yellow);
        --color-panel-title-active-foreground: var(--color-yellow);
        --color-panel-title-inactive-foreground: var(--color-6);
        --color-peek-view-border: var(--color-2);
        --color-peek-view-editor-background: var(--color-3);
        --color-peek-view-editor-match-highlight-background: var(--color-4);
        --color-peek-view-editor-gutter-background: var(--color-3);
        --color-peek-view-result-background: var(--color-3);
        --color-peek-view-result-file-foreground: var(--color-6);
        --color-peek-view-result-line-foreground: var(--color-6);
        --color-peek-view-result-match-highlight-background: var(--color-4);
        --color-peek-view-result-selection-background: var(--color-3);
        --color-peek-view-result-selection-foreground: var(--color-8);
        --color-peek-view-title-background: var(--color-3);
        --color-peek-view-title-description-foreground: var(--color-6);
        --color-peek-view-title-label-foreground: var(--color-8);
        --color-picker-group-border: var(--color-2);
        --color-picker-group-foreground: var(--color-4);
        --color-ports-icon-running-process-foreground: var(--color-green);
        --color-problems-error-icon-foreground: var(--color-red);
        --color-problems-info-icon-foreground: var(--color-blue);
        --color-problems-warning-icon-foreground: var(--color-orange);
        --color-progress-bar-background: var(--color-3);
        --color-sash-hover-border: var(--color-5);
        --color-scrollbar-shadow: var(--color-2);
        --color-scrollbar-slider-active-background: var(--color-5);
        --color-scrollbar-slider-background: var(--color-7)26;
        --color-scrollbar-slider-hover-background: var(--color-8)26;
        --color-selection-background: var(--color-7)26;
        --color-settings-checkbox-background: var(--color-3);
        --color-settings-checkbox-border: var(--color-3);
        --color-settings-checkbox-foreground: var(--color-8);
        --color-settings-dropdown-background: var(--color-3);
        --color-settings-dropdown-border: var(--color-3);
        --color-settings-dropdown-foreground: var(--color-8);
        --color-settings-dropdown-list-border: var(--color-6);
        --color-settings-header-foreground: var(--color-yellow);
        --color-settings-modified-item-foreground: var(--color-yellow);
        --color-settings-modified-item-indicator: var(--color-yellow);
        --color-settings-number-input-background: var(--color-3);
        --color-settings-number-input-border: var(--color-3);
        --color-settings-number-input-foreground: var(--color-8);
        --color-settings-row-hover-background: var(--color-5)0c;
        --color-settings-text-input-background: var(--color-3);
        --color-settings-text-input-border: var(--color-3);
        --color-settings-text-input-foreground: var(--color-8);
        --color-side-bar-background: var(--color-1);
        --color-side-bar-border: var(--color-0);
        --color-side-bar-drop-background: var(--color-1)bf;
        --color-side-bar-foreground: var(--color-6);
        --color-side-bar-section-header-background: var(--color-1);
        --color-side-bar-section-header-foreground: var(--color-5);
        --color-side-bar-title-foreground: var(--color-4);
        --color-status-bar-background: var(--color-1);
        --color-status-bar-border: var(--color-0);
        --color-status-bar-debugging-background: var(--color-5);
        --color-status-bar-debugging-border: var(--color-1);
        --color-status-bar-debugging-foreground: var(--color-8);
        --color-status-bar-focus-border: var(--color-3);
        --color-status-bar-foreground: var(--color-5);
        --color-status-bar-no-folder-background: var(--color-1);
        --color-status-bar-no-folder-border: var(--color-0);
        --color-status-bar-no-folder-foreground: var(--color-5);
        --color-status-bar-item-active-background: var(--color-2);
        --color-status-bar-item-error-background: var(--color-2);
        --color-status-bar-item-error-foreground: var(--color-red);
        --color-status-bar-item-focus-border: var(--color-5);
        --color-status-bar-item-hover-background: var(--color-8)0c;
        --color-status-bar-item-prominent-background: var(--color-3);
        --color-status-bar-item-prominent-hover-background: var(--color-3);
        --color-status-bar-item-remote-background: var(--color-1);
        --color-status-bar-item-remote-foreground: var(--color-green);
        --color-status-bar-item-warning-background: var(--color-2);
        --color-status-bar-item-warning-foreground: var(--color-orange);
        --color-symbol-icon-array-foreground: var(--color-red);
        --color-symbol-icon-boolean-foreground: var(--color-red);
        --color-symbol-icon-class-foreground: var(--color-blue);
        --color-symbol-icon-color-foreground: var(--color-purple);
        --color-symbol-icon-constant-foreground: var(--color-purple);
        --color-symbol-icon-constructor-foreground: var(--color-green);
        --color-symbol-icon-enumerator-foreground: var(--color-orange);
        --color-symbol-icon-enumerator-member-foreground: var(--color-orange);
        --color-symbol-icon-event-foreground: var(--color-orange);
        --color-symbol-icon-field-foreground: var(--color-orange);
        --color-symbol-icon-file-foreground: var(--color-7);
        --color-symbol-icon-folder-foreground: var(--color-7);
        --color-symbol-icon-function-foreground: var(--color-green);
        --color-symbol-icon-interface-foreground: var(--color-blue);
        --color-symbol-icon-key-foreground: var(--color-orange);
        --color-symbol-icon-keyword-foreground: var(--color-red);
        --color-symbol-icon-method-foreground: var(--color-green);
        --color-symbol-icon-module-foreground: var(--color-blue);
        --color-symbol-icon-namespace-foreground: var(--color-blue);
        --color-symbol-icon-null-foreground: var(--color-purple);
        --color-symbol-icon-number-foreground: var(--color-purple);
        --color-symbol-icon-object-foreground: var(--color-blue);
        --color-symbol-icon-operator-foreground: var(--color-red);
        --color-symbol-icon-package-foreground: var(--color-purple);
        --color-symbol-icon-property-foreground: var(--color-orange);
        --color-symbol-icon-reference-foreground: var(--color-purple);
        --color-symbol-icon-snippet-foreground: var(--color-green);
        --color-symbol-icon-string-foreground: var(--color-yellow);
        --color-symbol-icon-struct-foreground: var(--color-red);
        --color-symbol-icon-text-foreground: var(--color-yellow);
        --color-symbol-icon-type-parameter-foreground: var(--color-orange);
        --color-symbol-icon-unit-foreground: var(--color-purple);
        --color-symbol-icon-variable-foreground: var(--color-blue);
        --color-tab-active-background: var(--color-2);
        --color-tab-active-border: var(--color-yellow);
        --color-tab-active-foreground: var(--color-yellow);
        --color-tab-active-modified-border: var(--color-4);
        --color-tab-border: var(--color-2);
        --color-tab-hover-background: var(--color-2);
        --color-tab-hover-border: var(--color-4);
        --color-tab-hover-foreground: var(--color-8);
        --color-tab-inactive-background: var(--color-2);
        --color-tab-inactive-foreground: var(--color-6);
        --color-tab-inactive-modified-border: var(--color-4);
        --color-tab-last-pinned-border: var(--color-4);
        --color-tab-unfocused-active-border: var(--color-6);
        --color-tab-unfocused-active-foreground: var(--color-7);
        --color-tab-unfocused-active-modified-border: var(--color-3);
        --color-tab-unfocused-hover-background: var(--color-2);
        --color-tab-unfocused-hover-border: var(--color-2);
        --color-tab-unfocused-hover-foreground: var(--color-7);
        --color-tab-unfocused-inactive-foreground: var(--color-6);
        --color-tab-unfocused-inactive-modified-border: var(--color-3);
        --color-terminal-ansi-black: var(--color-3);
        --color-terminal-ansi-blue: var(--color-orange);
        --color-terminal-ansi-bright-black: var(--color-5);
        --color-terminal-ansi-bright-blue: var(--color-orange);
        --color-terminal-ansi-bright-cyan: var(--color-blue);
        --color-terminal-ansi-bright-green: var(--color-green);
        --color-terminal-ansi-bright-magenta: var(--color-purple);
        --color-terminal-ansi-bright-red: var(--color-red);
        --color-terminal-ansi-bright-white: var(--color-8);
        --color-terminal-ansi-bright-yellow: var(--color-yellow);
        --color-terminal-ansi-cyan: var(--color-blue);
        --color-terminal-ansi-green: var(--color-green);
        --color-terminal-ansi-magenta: var(--color-purple);
        --color-terminal-ansi-red: var(--color-red);
        --color-terminal-ansi-white: var(--color-8);
        --color-terminal-ansi-yellow: var(--color-yellow);
        --color-terminal-background: var(--color-3);
        --color-terminal-foreground: var(--color-8);
        --color-terminal-selection-background: var(--color-8)26;
        --color-terminal-command-decoration-default-background: var(--color-8);
        --color-terminal-command-decoration-error-background: var(--color-red);
        --color-terminal-command-decoration-success-background: var(--color-green);
        --color-terminal-cursor-background: var(--color-transparent);
        --color-terminal-cursor-foreground: var(--color-8);
        --color-testing-icon-errored: var(--color-red);
        --color-testing-icon-failed: var(--color-red);
        --color-testing-icon-passed: var(--color-green);
        --color-testing-icon-queued: var(--color-8);
        --color-testing-icon-skipped: var(--color-orange);
        --color-testing-icon-unset: var(--color-6);
        --color-testing-message-error-decoration-foreground: var(--color-red);
        --color-testing-message-error-line-background: var(--color-red)19;
        --color-testing-message-info-decoration-foreground: var(--color-8);
        --color-testing-message-info-line-background: var(--color-8)19;
        --color-testing-run-action: var(--color-yellow);
        --color-text-block-quote-background: var(--color-3);
        --color-text-block-quote-border: var(--color-3);
        --color-text-code-block-background: var(--color-3);
        --color-text-link-active-foreground: var(--color-8);
        --color-text-link-foreground: var(--color-yellow);
        --color-text-preformat-foreground: var(--color-8);
        --color-text-separator-foreground: var(--color-5);
        --color-title-bar-active-background: var(--color-1);
        --color-title-bar-active-foreground: var(--color-6);
        --color-title-bar-border: var(--color-0);
        --color-title-bar-inactive-background: var(--color-1);
        --color-title-bar-inactive-foreground: var(--color-4);
        --color-walk-through-embedded-editor-background: var(--color-1);
        --color-welcome-page-button-background: var(--color-3);
        --color-welcome-page-button-hover-background: var(--color-4);
        --color-welcome-page-progress-background: var(--color-5);
        --color-welcome-page-progress-foreground: var(--color-6);
        --color-welcome-page-tile-background: var(--color-3);
        --color-welcome-page-tile-hover-background: var(--color-4);
        --color-welcome-page-tile-shadow: var(--color-0);
        --color-widget-shadow: var(--color-0);


        --color-black: #0a0908;
        --color-black-rgb: 10, 9, 8;
        --color-gray: #22333b;
        --color-gray-rgb: 34, 51, 59;
        --color-tan: #eae0d5;
        --color-tan-rgb: 234, 224, 213;
        --color-brown: #5e503f;
        --color-brown-rgb: 94, 80, 63;

        --color-dark: var(--color-black);
        --color-dark-rgb: var(--color-black-rgb);
        --color-light: var(--color-tan);
        --color-light-rgb: var(--color-tan-rgb);

        --text-color-bk-light: var(--color-dark);
        --text-color-bk-dark: var(--color-light);
        --text-color-bk-black: var(--color-light);
        --text-color-bk-gray: var(--color-light);
        --text-color-bk-tan: var(--color-dark);
        --text-color-bk-brown: var(--color-light);

        /** Transitions & Animations */
        --transition-duration: 0.12s;
        --transition-ease: ease-out;
        --transition: var(--transition-duration) var(--transition-ease);
    }
    :global(body) {
        margin: 0;
        font-family: var(--font-copy);
        font-size: 16px;
        font-weight: 300;
        line-height: 1;
        min-height: 100vh;
        color: var(--color-gray);
        background-color: var(--color-brown);
        font-smooth: always;
    }
    :global(body *) {
        box-sizing: border-box;
    }
    :global(.app) {
        display: grid;
        grid-template-rows: max-content 1fr max-content;
        min-height: 100vh;
    }
    :global(main) {
        position: relative;
    }

    /** Typography */
    :global(.all-caps) {
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    :global(.title) {
        font-family: var(--font-display);
        font-size: 30px;
        font-weight: normal;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    :global(em) {
        display: inline-block;
        margin: 0 0.05em;
        font-family: var(--font-display);
        font-size: 3em;
        font-style: normal;
        transform: translateY(0.4em);
    }
</style>
