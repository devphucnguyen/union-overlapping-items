function unionOverlappingItems(unavailableItems) {
    unavailableItems.sort((a, b) => a.startPx - b.startPx);

    const mergedIntervals = [];
    let currentInterval = null;

    for (const item of unavailableItems) {
        if (!currentInterval) {
            currentInterval = item;
        } else if (item.startPx <= currentInterval.endPx) {
            currentInterval.endPx = Math.max(currentInterval.endPx, item.endPx);
        } else {
            mergedIntervals.push(currentInterval);
            currentInterval = item;
        }
    }

    if (currentInterval) {
        mergedIntervals.push(currentInterval);
    }

    return mergedIntervals;
}