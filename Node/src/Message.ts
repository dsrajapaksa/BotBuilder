// 
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license.
// 
// Microsoft Bot Framework: http://botframework.com
// 
// Bot Builder SDK Github:
// https://github.com/Microsoft/BotBuilder
// 
// Copyright (c) Microsoft Corporation
// All rights reserved.
// 
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

import session = require('./Session');

export class Message implements IMessage {
    public setLanguage(language: string): this {
        var m = <IMessage>this;
        m.language = language;
        return this;    
    }
    
    public setText(ses: session.Session, msg: string, ...args: any[]): this {
        var m = <IMessage>this;
        args.unshift(msg);
        m.text = session.Session.prototype.gettext.apply(ses, args);
        return this;
    }

    public setNText(ses: session.Session, msg: string, msg_plural: string, count: number): this {
        var m = <IMessage>this;
        m.text = ses.ngettext(msg, msg_plural, count);
        return this;
    }
    
    public addAttachment(attachment: IAttachment): this {
        var m = <IMessage>this;
        if (!m.attachments) {
            m.attachments = [];
        }
        m.attachments.push(attachment);
        return this;
    }
    
    public setChannelData(data: any): this {
        var m = <IMessage>this;
        m.channelData = data;
        return this;
    }
}