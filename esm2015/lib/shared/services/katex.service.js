import { Injectable } from '@angular/core';
import { render, ParseError } from 'katex';
import * as i0 from "@angular/core";
export class KatexService {
    constructor() {
        this.delimiters = [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            // FIXME check if we need the ones below
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false },
        ];
    }
    /**
    *
    * Receives text that can contain LaTeX formulas. The formulas will be
    * identified using `this.delimiters` and rendered inside the passed
    * HTMLElement
    *
    * NOTE: The HTMLElement is expected to have a single child and this
    * will be replaced by the HTML with formatted LaTeX
    *
    * @param {string} text - text to be formatted with LaTeX
    * @param {HTMLElement} el - the HTMLElement where the LaTeX should be rendered
    */
    renderMathInText(text, el) {
        const data = this.splitWithDelimiters(text, this.delimiters);
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < data.length; i++) {
            if (data[i].type === 'text') {
                fragment.appendChild(document.createTextNode(data[i].data));
            }
            else {
                const span = document.createElement('span');
                const math = data[i].data;
                try {
                    render(math, span, {
                        displayMode: data[i].display,
                    });
                }
                catch (e) {
                    if (!(e instanceof ParseError)) {
                        throw e;
                    }
                    console.error(`KaTeX auto-render: Failed to parse ${data[i].data} with ${e}`);
                    fragment.appendChild(document.createTextNode(data[i].rawData));
                    continue;
                }
                fragment.appendChild(span);
            }
        }
        // clear
        el.innerHTML = '';
        el.appendChild(fragment);
    }
    findEndOfMath(delimiter, text, startIndex) {
        // Adapted from
        // https://github.com/Khan/perseus/blob/master/src/perseus-markdown.jsx
        let index = startIndex;
        let braceLevel = 0;
        const delimLength = delimiter.length;
        while (index < text.length) {
            const character = text[index];
            if (braceLevel <= 0 &&
                text.slice(index, index + delimLength) === delimiter) {
                return index;
            }
            else if (character === '\\') {
                index++;
            }
            else if (character === '{') {
                braceLevel++;
            }
            else if (character === '}') {
                braceLevel--;
            }
            index++;
        }
        return -1;
    }
    splitAtDelimiters(startData, leftDelim, rightDelim, display) {
        const finalData = [];
        for (let i = 0; i < startData.length; i++) {
            if (startData[i].type === 'text') {
                const text = startData[i].data;
                let lookingForLeft = true;
                let currIndex = 0;
                let nextIndex;
                nextIndex = text.indexOf(leftDelim);
                if (nextIndex !== -1) {
                    currIndex = nextIndex;
                    finalData.push({
                        type: 'text',
                        data: text.slice(0, currIndex),
                    });
                    lookingForLeft = false;
                }
                while (true) {
                    if (lookingForLeft) {
                        nextIndex = text.indexOf(leftDelim, currIndex);
                        if (nextIndex === -1) {
                            break;
                        }
                        finalData.push({
                            type: 'text',
                            data: text.slice(currIndex, nextIndex),
                        });
                        currIndex = nextIndex;
                    }
                    else {
                        nextIndex = this.findEndOfMath(rightDelim, text, currIndex + leftDelim.length);
                        if (nextIndex === -1) {
                            break;
                        }
                        finalData.push({
                            type: 'math',
                            data: text.slice(currIndex + leftDelim.length, nextIndex),
                            rawData: text.slice(currIndex, nextIndex + rightDelim.length),
                            display: display,
                        });
                        currIndex = nextIndex + rightDelim.length;
                    }
                    lookingForLeft = !lookingForLeft;
                }
                finalData.push({
                    type: 'text',
                    data: text.slice(currIndex),
                });
            }
            else {
                finalData.push(startData[i]);
            }
        }
        return finalData;
    }
    splitWithDelimiters(text, delimiters) {
        let data = [{ type: 'text', data: text }];
        for (let i = 0; i < delimiters.length; i++) {
            const delimiter = delimiters[i];
            data = this.splitAtDelimiters(data, delimiter.left, delimiter.right, delimiter.display || false);
        }
        return data;
    }
}
KatexService.ɵfac = function KatexService_Factory(t) { return new (t || KatexService)(); };
KatexService.ɵprov = i0.ɵɵdefineInjectable({ token: KatexService, factory: KatexService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(KatexService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2F0ZXguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvdmFyL3d3dy9odG1sL0Fuc2h1bC1Kb3NoaS9Bbmd1bGFyL0dpdEh1bGZ0SW5jL2pzb24tZWRpdG9yL3Byb2plY3RzL2pzb24tZWRpdG9yL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMva2F0ZXguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDOztBQUszQyxNQUFNLE9BQU8sWUFBWTtJQUR6QjtRQUVVLGVBQVUsR0FBRztZQUNuQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQzFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7WUFDekMsd0NBQXdDO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDNUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtTQUM5QyxDQUFDO0tBOEpIO0lBNUpDOzs7Ozs7Ozs7OztNQVdFO0lBQ0YsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLEVBQWU7UUFDNUMsTUFBTSxJQUFJLEdBQXFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9FLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBRW5ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFB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b3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdCwgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7IHJlbmRlciwgUGFyc2VFcnJvciB9IGZyb20gJ2thdGV4JztcblxuaW1wb3J0IHsgSlNPTlNjaGVtYSwgS2F0ZXhEYXRhIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLYXRleFNlcnZpY2Uge1xuICBwcml2YXRlIGRlbGltaXRlcnMgPSBbXG4gICAgeyBsZWZ0OiAnJCQnLCByaWdodDogJyQkJywgZGlzcGxheTogdHJ1ZSB9LFxuICAgIHsgbGVmdDogJyQnLCByaWdodDogJyQnLCBkaXNwbGF5OiBmYWxzZSB9LFxuICAgIC8vIEZJWE1FIGNoZWNrIGlmIHdlIG5lZWQgdGhlIG9uZXMgYmVsb3dcbiAgICB7IGxlZnQ6ICdcXFxcWycsIHJpZ2h0OiAnXFxcXF0nLCBkaXNwbGF5OiB0cnVlIH0sXG4gICAgeyBsZWZ0OiAnXFxcXCgnLCByaWdodDogJ1xcXFwpJywgZGlzcGxheTogZmFsc2UgfSxcbiAgXTtcblxuICAvKipcbiAgKlxuICAqIFJlY2VpdmVzIHRleHQgdGhhdCBjYW4gY29udGFpbiBMYVRlWCBmb3JtdWxhcy4gVGhlIGZvcm11bGFzIHdpbGwgYmVcbiAgKiBpZGVudGlmaWVkIHVzaW5nIGB0aGlzLmRlbGltaXRlcnNgIGFuZCByZW5kZXJlZCBpbnNpZGUgdGhlIHBhc3NlZFxuICAqIEhUTUxFbGVtZW50XG4gICpcbiAgKiBOT1RFOiBUaGUgSFRNTEVsZW1lbnQgaXMgZXhwZWN0ZWQgdG8gaGF2ZSBhIHNpbmdsZSBjaGlsZCBhbmQgdGhpc1xuICAqIHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIEhUTUwgd2l0aCBmb3JtYXR0ZWQgTGFUZVhcbiAgKlxuICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBiZSBmb3JtYXR0ZWQgd2l0aCBMYVRlWFxuICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIC0gdGhlIEhUTUxFbGVtZW50IHdoZXJlIHRoZSBMYVRlWCBzaG91bGQgYmUgcmVuZGVyZWRcbiAgKi9cbiAgcmVuZGVyTWF0aEluVGV4dCh0ZXh0OiBzdHJpbmcsIGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGRhdGE6IEFycmF5PEthdGV4RGF0YT4gPSB0aGlzLnNwbGl0V2l0aERlbGltaXRlcnModGV4dCwgdGhpcy5kZWxpbWl0ZXJzKTtcblxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGF0YVtpXS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YVtpXS5kYXRhKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBtYXRoID0gZGF0YVtpXS5kYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlbmRlcihtYXRoLCBzcGFuLCB7XG4gICAgICAgICAgICBkaXNwbGF5TW9kZTogZGF0YVtpXS5kaXNwbGF5LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFBhcnNlRXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgYEthVGVYIGF1dG8tcmVuZGVyOiBGYWlsZWQgdG8gcGFyc2UgJHtkYXRhW2ldLmRhdGF9IHdpdGggJHtlfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGFbaV0ucmF3RGF0YSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjbGVhclxuICAgIGVsLmlubmVySFRNTCA9ICcnO1xuICAgIGVsLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEVuZE9mTWF0aChkZWxpbWl0ZXI6IHN0cmluZywgdGV4dDogc3RyaW5nLCBzdGFydEluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIC8vIEFkYXB0ZWQgZnJvbVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9LaGFuL3BlcnNldXMvYmxvYi9tYXN0ZXIvc3JjL3BlcnNldXMtbWFya2Rvd24uanN4XG4gICAgbGV0IGluZGV4ID0gc3RhcnRJbmRleDtcbiAgICBsZXQgYnJhY2VMZXZlbCA9IDA7XG5cbiAgICBjb25zdCBkZWxpbUxlbmd0aCA9IGRlbGltaXRlci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgY29uc3QgY2hhcmFjdGVyID0gdGV4dFtpbmRleF07XG5cbiAgICAgIGlmIChicmFjZUxldmVsIDw9IDAgJiZcbiAgICAgICAgdGV4dC5zbGljZShpbmRleCwgaW5kZXggKyBkZWxpbUxlbmd0aCkgPT09IGRlbGltaXRlcikge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gJ3snKSB7XG4gICAgICAgIGJyYWNlTGV2ZWwrKztcbiAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSAnfScpIHtcbiAgICAgICAgYnJhY2VMZXZlbC0tO1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHByaXZhdGUgc3BsaXRBdERlbGltaXRlcnMoc3RhcnREYXRhOiBBcnJheTxLYXRleERhdGE+LCBsZWZ0RGVsaW06IHN0cmluZywgcmlnaHREZWxpbTogc3RyaW5nLCBkaXNwbGF5OiBib29sZWFuKTogQXJyYXk8S2F0ZXhEYXRhPiB7XG4gICAgY29uc3QgZmluYWxEYXRhID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0YXJ0RGF0YVtpXS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHN0YXJ0RGF0YVtpXS5kYXRhO1xuXG4gICAgICAgIGxldCBsb29raW5nRm9yTGVmdCA9IHRydWU7XG4gICAgICAgIGxldCBjdXJySW5kZXggPSAwO1xuICAgICAgICBsZXQgbmV4dEluZGV4O1xuXG4gICAgICAgIG5leHRJbmRleCA9IHRleHQuaW5kZXhPZihsZWZ0RGVsaW0pO1xuICAgICAgICBpZiAobmV4dEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGN1cnJJbmRleCA9IG5leHRJbmRleDtcbiAgICAgICAgICBmaW5hbERhdGEucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBkYXRhOiB0ZXh0LnNsaWNlKDAsIGN1cnJJbmRleCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbG9va2luZ0ZvckxlZnQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgaWYgKGxvb2tpbmdGb3JMZWZ0KSB7XG4gICAgICAgICAgICBuZXh0SW5kZXggPSB0ZXh0LmluZGV4T2YobGVmdERlbGltLCBjdXJySW5kZXgpO1xuICAgICAgICAgICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbmFsRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICBkYXRhOiB0ZXh0LnNsaWNlKGN1cnJJbmRleCwgbmV4dEluZGV4KSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdXJySW5kZXggPSBuZXh0SW5kZXg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRJbmRleCA9IHRoaXMuZmluZEVuZE9mTWF0aChcbiAgICAgICAgICAgICAgcmlnaHREZWxpbSxcbiAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgY3VyckluZGV4ICsgbGVmdERlbGltLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmluYWxEYXRhLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnbWF0aCcsXG4gICAgICAgICAgICAgIGRhdGE6IHRleHQuc2xpY2UoXG4gICAgICAgICAgICAgICAgY3VyckluZGV4ICsgbGVmdERlbGltLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXgpLFxuICAgICAgICAgICAgICByYXdEYXRhOiB0ZXh0LnNsaWNlKFxuICAgICAgICAgICAgICAgIGN1cnJJbmRleCxcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXggKyByaWdodERlbGltLmxlbmd0aCksXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY3VyckluZGV4ID0gbmV4dEluZGV4ICsgcmlnaHREZWxpbS5sZW5ndGg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbG9va2luZ0ZvckxlZnQgPSAhbG9va2luZ0ZvckxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBmaW5hbERhdGEucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGRhdGE6IHRleHQuc2xpY2UoY3VyckluZGV4KSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaW5hbERhdGEucHVzaChzdGFydERhdGFbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaW5hbERhdGE7XG4gIH1cblxuICBwcml2YXRlIHNwbGl0V2l0aERlbGltaXRlcnModGV4dCwgZGVsaW1pdGVycyk6IEFycmF5PEthdGV4RGF0YT4ge1xuICAgIGxldCBkYXRhID0gW3sgdHlwZTogJ3RleHQnLCBkYXRhOiB0ZXh0IH1dO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsaW1pdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGVsaW1pdGVyID0gZGVsaW1pdGVyc1tpXTtcbiAgICAgIGRhdGEgPSB0aGlzLnNwbGl0QXREZWxpbWl0ZXJzKFxuICAgICAgICBkYXRhLCBkZWxpbWl0ZXIubGVmdCwgZGVsaW1pdGVyLnJpZ2h0LFxuICAgICAgICBkZWxpbWl0ZXIuZGlzcGxheSB8fCBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbn1cbiJdfQ==