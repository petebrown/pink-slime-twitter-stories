let interval = null;

// Make all of the poop and trash can counters invisible
d3.selectAll("#counter_poop, #key_poop, #counter_trash_can, #key_trash_can, #key_background_1, #key_background_2").style("opacity", 0);

scroller.setup({
    step: ".step",
    offset: 0.85,
    debug: false
})

.onStepEnter((response) => {
    // this log helps us keep track of where we are while we are building the scrolly
    console.log("step triggered: " + response.index);
    // a series of if statements to run different pieces of code for different steps
    if (response.index === 0) {
        // inside each step, let's provide instructions for everything that needs to happen
        d3.select("#big_poop").transition().duration(4000).style("opacity", 0);
        d3.selectAll(".g-map_architecture").transition().duration(4000).style("opacity", 0.5);
        d3.select("#g-poops_v2-Artboard_1-img").transition().duration(2000).style("opacity", 0.8);

        if (interval) {
            clearInterval(interval)
        }

        d3.selectAll("#counter_poop, #key_poop, #counter_trash_can, #key_trash_can, #key_background_1, #key_background_2").transition().duration(1000).style("opacity", 0);

        d3.selectAll("path[id^='poop_']").transition().duration(1000).style("opacity", 0)
    } else if (response.index === 1) {
        if (interval) {
            clearInterval(interval)
        }

        d3.selectAll("#counter_poop, #key_poop, #key_background_1").transition().duration(1000).style("opacity", 1);

        total_poops = d3.selectAll("path[id^='poop_']").size()
        console.log(total_poops + ' poops found')
        poop_number = 0

        interval = setInterval(function() {
            if (poop_number === total_poops) {
                return
            } else {            
                id_name = `#poop_${poop_number}`
    
                d3.select(id_name).style("opacity", 0.8)
                // console.log("Displayed " + id_name)
    
                d3.select('#counter_poop').text("Poop counter: " + (poop_number + 1))
                
                poop_number += 1
            }
        }, 250)
        
    } else if (response.index === 3) {
        if (interval) {
            clearInterval(interval)
        }

        d3.selectAll("path[id^='poop_']").transition().duration(1000).style("opacity", 0.75)
        d3.select('#counter_poop').transition().duration(1000).text("Poop counter: " + total_poops);
        
    } else if (response.index === 6) {
        if (interval) {
            clearInterval(interval)
        }

        d3.selectAll("#counter_trash_can, #key_trash_can, #key_background_2, path[id^='trash_']").transition().duration(1000).style("opacity", 0);
        
    } else if (response.index === 7) {
        if (interval) {
            clearInterval(interval)
        }

        total_trash_cans = d3.selectAll("path[id^='trash_']").size()

        d3.selectAll("#counter_trash_can, #key_trash_can, #key_background_2").transition().duration(1000).style("opacity", 1);

        // d3.selectAll("path[id^='trash_']").transition().duration(2500).style("opacity", 1)
        // d3.select('#counter_trash_can').text("Trash can counter: " + total_trash_cans)

        total_trash_cans = d3.selectAll("path[id^='trash_']").size()
        console.log(total_trash_cans + ' trash cans found')
        trash_can_number = 1

        interval = setInterval(function() {
            if (trash_can_number > total_trash_cans) {
                return
            } else {            
                id_name = `#trash_${trash_can_number}`
    
                d3.select(id_name).style("opacity", 1)
                // console.log("Displayed " + id_name)
    
                d3.select('#counter_trash_can').text("Trash cans: " + (trash_can_number))
                
                trash_can_number += 1
            }
        }, 275)
    } else if (response.index === 8) {
        if (interval) {
            clearInterval(interval)
        }
        d3.selectAll("path[id^='trash_']").transition().duration(1000).style("opacity", 1)

        d3.select('#counter_trash_can').text("Trash cans: " + (total_trash_cans))
    }
});