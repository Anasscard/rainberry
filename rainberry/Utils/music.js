module.exports = {
    progressbar: function (total, current, size = 30, line = "-", slider = "🎵") {
        if (current > total) {
            const bar = line.repeat(size + 2);
            return bar;
        } else {
            const percentage = current / total;
            const progress = Math.round((size * percentage));
            const emptyProgress = size - progress;
            const progressText = line.repeat(progress).replace(/.$/, slider);
            const emptyProgressText = line.repeat(emptyProgress);
            const bar = progressText + emptyProgressText;
            return bar;
        }
    },
    status: function (queue) {

        let volume = queue.volume;
        let filter = queue.filter || "Off";
        let loop = queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off";
        let autoplay = queue.autoplay ? "On" : "Off";

        let status;
        let footer

        if (filter !== "Off" && loop === "Off" && autoplay === "Off") {
            status = `Filter: ${filter}`;
        }
        else if (filter !== "Off" && loop !== "Off" && autoplay === "Off") {
            status = `Filter: ${filter} | Loop: ${loop}`;
        }
        else if (filter !== "Off" && loop !== "Off" && autoplay !== "Off") {
            status = `Filter: ${filter} | Loop: ${loop} | Autoplay: ${autoplay}`;
        }
        else if (filter === "Off" && loop !== "Off" && autoplay !== "Off") {
            status = `Loop: ${loop} | Autoplay: ${autoplay}`;
        }
        else if (filter === "Off" && loop === "Off" && autoplay !== "Off") {
            status = `Autoplay: ${autoplay}`;
        }
        else if (filter === "Off" && loop === "Off" && autoplay === "Off") {
            status = null;
        }

        if (!status) {
            footer = `Volume: ${volume}%`;
        } else {
            footer = `Volume: ${volume}% | ${status}`;
        }

        return footer;
    }
}